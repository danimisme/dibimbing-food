import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navStyle, setNavStyle] = useState("bg-green-700");
  const router = useRouter();
  const { pathname } = router;

  const handleScroll = () => {
    if (window.scrollY >= 100 && window.scrollY < 500) {
      setNavStyle(" transform -translate-y-16 ");
    } else if (window.scrollY > 500) {
      setNavStyle("bg-green-700/50 backdrop-blur-sm");
    } else if (window.scrollY < 100) {
      setNavStyle("bg-green-700");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` sticky top-0 w-full transition duration-500 ease-in-out ${navStyle}`}
    >
      <div className=" font-bold p-4 flex justify-between w-4/5 mx-auto">
        <h1 className="text-2xl text-white"> Dibimbing Food</h1>
        <div className="flex gap-4">
          <Link href="/">
            <button
              className={` ${
                pathname === "/" ? "text-white" : " text-gray-200"
              } `}
            >
              Home
            </button>
          </Link>
          <Link href="/essen">
            <button
              className={` ${
                pathname === "/essen" ? "text-white" : " text-gray-200"
              }`}
            >
              Foodlist
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
