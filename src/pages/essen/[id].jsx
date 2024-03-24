import DetailFoodCard from "@/components/DetailFoodCard";
import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`,
    { headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" } }
  );
  return { props: { food: res?.data?.data } };
}

export default function DetailFoodPage({ food }) {
  const { push } = useRouter();
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center mt-3">Detail Food</h1>
      <DetailFoodCard food={food} />
      <div className="flex justify-center gap-5 mt-5">
        <button
          className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => push("/essen")}
        >
          Back
        </button>
        <button className="bg-green-700 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button className="bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
