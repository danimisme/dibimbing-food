import axios from "axios";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
  );
  return { props: { food: res?.data?.data } };
}

export default function DetailFoodPage(food) {
  console.log(food);
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center">Detail Food</h1>
    </div>
  );
}
