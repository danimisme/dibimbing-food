import CardFood from "@/components/CardFood";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
    {
      headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
    }
  );
  return { props: { foods: res?.data?.data } };
}

export default function FoodListPage({ foods }) {
  return (
    <div>
      <div className=" p-5 flex justify-center ">
        <h1 className=" text-2xl font-bold ">Food List</h1>
        <button className=" bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded-xl">
          Add Food
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-4 p-5 w-4/5 mx-auto">
        {foods.map((food) => (
          <CardFood key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
