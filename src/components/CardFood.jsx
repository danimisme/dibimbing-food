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
          <button className="bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-green-300 hover:text-gray-700">
            View Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
