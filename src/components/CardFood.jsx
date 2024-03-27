import Link from "next/link";

export default function CardFood({ food }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
      <img
        className="rounded-t-lg w-full aspect-[4/3]"
        src={food.imageUrl}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {food.name}
        </h5>
        <Link href={`/essen/${food.id}`}>
          <button className="text-green-700 border-2 border-green-700 font-bold hover:bg-green-500 hover:text-white hover:border-green-500 py-1 px-2 rounded-xl">
            View Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
