export default function DetailFoodCard({ food }) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center p-5 w-3/4 mx-auto">
      <div>
        <img
          className="rounded-xl w-full aspect-[4/3]"
          src={food.imageUrl}
          alt={food.name}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-5">{food.name}</h2>
        <p className="text-lg border-b border-gray-300">
          <span className="font-bold">Rating : </span> {food.rating}
        </p>
        <p className="text-lg border-b border-gray-300">
          <span span className="font-bold">
            Likes :{" "}
          </span>
          {food.totalLikes}
        </p>
        <p className="text-lg border-b border-gray-300">
          <span className="font-bold">Ingredients : </span>
          {`${food.ingredients
            .map((ingredient) => ingredient.split(","))
            .join(", ")} `}
        </p>
        <p className="text-lg border-b border-gray-300">
          <span className="font-bold">Description : </span> {food.description}
        </p>
      </div>
    </div>
  );
}
