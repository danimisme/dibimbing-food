import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import WaveLayout from "@/components/Layout/WaveLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <WaveLayout>
      <div className="flex justify-center flex-col md:flex-row p-10">
        <div className=" w-1/2 items-center justify-center font-mono flex flex-col px-10 ">
          <h1 className="text-5xl font-bold text-green-500 text-end ">
            Discover Our Delicius <span className="text-yellow-500">Food</span>
          </h1>
          <Link
            href="/essen"
            className=" text-green-500 border-2 border-green-500 font-bold text-xl hover:bg-green-500 hover:text-white py-2 px-4 rounded-xl mt-4 ml-auto "
          >
            <button className="pointer-events-auto">View Menu</button>
          </Link>
        </div>
        <div>
          <img src="/images/food.png" alt="food" className="w-full" />
        </div>
      </div>
    </WaveLayout>
  );
}
