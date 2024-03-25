import CardFood from "@/components/CardFood";
import axios from "axios";
import { useDispatch } from "react-redux";
import { show } from "@/redux/reducers/ModalShowReducers";
import FormFood from "@/components/FormFood";
import usePost from "@/hooks/usePost";

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
  const dispatch = useDispatch();
  const { post } = usePost();

  const handleCreate = (name, description, imageUrl, ingredients) => {
    post("create-food", {
      name,
      description,
      imageUrl,
      ingredients,
    });
  };

  return (
    <div>
      <div className=" p-5 flex justify-center ">
        <h1 className=" text-2xl font-bold ">Food List</h1>
        <button
          className=" bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded-xl"
          onClick={() => dispatch(show())}
        >
          Add Food
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-4 p-5 w-4/5 mx-auto">
        {foods.map((food) => (
          <CardFood key={food.id} food={food} />
        ))}
      </div>
      <FormFood title="Add Food" onSubmitForm={handleCreate} />
    </div>
  );
}
