import DetailFoodCard from "@/components/DetailFoodCard";
import axios from "axios";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
  );
  return { props: { food: res?.data?.data } };
}

export default function DetailFoodPage({ food }) {
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center mt-3">Detail Food</h1>
      <DetailFoodCard food={food} />
    </div>
  );
}
