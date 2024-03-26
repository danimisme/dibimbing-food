import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { hide } from "@/redux/reducers/ModalShowReducers";
export default function usePost() {
  const dispatch = useDispatch();
  const router = useRouter();
  const post = async (url, body) => {
    try {
      await axios.post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/${url}`,
        body,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );
      dispatch(hide());
      router.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { post };
}
