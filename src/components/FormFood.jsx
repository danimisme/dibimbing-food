import InputForm from "./InputForm";
import styles from "@/styles/FormFood.module.css";
import { useState } from "react";

export default function FormFood({ food, title }) {
  const [show, setShow] = useState(true);
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div
      className={`${styles.modal_form_food} ${
        show ? `${styles.show}` : `${styles.hide}`
      }`}
    >
      <form
        className={`${styles.form_food} max-w-sm gap-2 p-5 w-3/4 mx-auto rounded-xl `}
      >
        <h1 className=" text-2xl font-bold text-center mt-3">{title}</h1>

        <InputForm
          label="Name"
          type="text"
          name="name"
          defaultValue={food.name}
          onChange={handleChange}
        />
        <InputForm
          label="Description"
          type="text"
          name="description"
          defaultValue={food.description}
          onChange={handleChange}
        />
        <InputForm
          label="Image Url"
          type="text"
          name="imageUrl"
          defaultValue={food.imageUrl}
          onChange={handleChange}
        />
        <InputForm
          label="Ingredients"
          type="text"
          name="ingredients"
          defaultValue={food.ingredients}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-3"
        >
          {title}
        </button>
        <button
          className="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}