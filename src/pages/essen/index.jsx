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
  console.log(foods);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Food List</h1>
    </div>
  );
}
