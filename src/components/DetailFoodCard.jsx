export default function DetailFoodCard({ food }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 items-center p-5 w-3/4 mx-auto">
      <div>
        <img
          className="rounded-xl w-full aspect-[4/3]"
          src={food.imageUrl}
          alt={food.name}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-5 text-gray-700  text-center underline underline-offset-8 decoration-yellow-700">
          {food.name}
        </h2>
        <p className="text-lg border-b border-yellow-700 px-3">
          <span className="font-bold text-gray-500">Rating : </span>{" "}
          {food.rating}
        </p>
        <p className="text-lg border-b border-yellow-700 px-3">
          <span className="font-bold text-gray-500">Likes :</span>{" "}
          {food.totalLikes}
        </p>
        <p className="text-lg border-b border-yellow-700 px-3">
          <span className="font-bold text-gray-500">Ingredients : </span>
          {`${food.ingredients.join(", ")} `}
        </p>
        <p className="text-lg border-b border-yellow-700 px-3">
          <span className="font-bold text-gray-500">Description : </span>{" "}
          {food.description}
        </p>
      </div>
    </div>
  );
}
