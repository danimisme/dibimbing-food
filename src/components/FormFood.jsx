import { hide } from "@/redux/reducers/ModalShowReducers";
import InputForm from "./InputForm";
import styles from "@/styles/FormFood.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function FormFood({ food, title, onSubmitForm }) {
  const dispatch = useDispatch();
  const isModalShow = useSelector((store) => store.modalShow.modalShow);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const ingredients = e.target.ingredients.value.split(",");

    onSubmitForm(name, description, imageUrl, ingredients);
  };
  return (
    <div
      className={`${styles.modal_form_food} ${
        isModalShow ? `${styles.show}` : `${styles.hide}`
      }`}
    >
      <div
        className={`${styles.form_food} max-w-sm gap-2 p-5 w-3/4 mx-auto rounded-xl `}
      >
        <form onSubmit={handleSubmit}>
          <h1 className=" text-2xl text-green-800 font-bold text-center mt-3">
            {title}
          </h1>

          <InputForm
            label="Name"
            type="text"
            name="name"
            placeholder="Input Food Name"
            defaultValue={food?.name}
          />
          <InputForm
            label="Description"
            type="text"
            name="description"
            placeholder="Describe The Food"
            defaultValue={food?.description}
          />
          <InputForm
            label="Image Url"
            type="text"
            name="imageUrl"
            placeholder=" Example : https://example.com/image.jpg"
            defaultValue={food?.imageUrl}
          />
          <InputForm
            label="Ingredients"
            type="text"
            name="ingredients"
            placeholder="Input Ingredients"
            defaultValue={food?.ingredients}
          />
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mx-3"
          >
            {title}
          </button>
          <a
            className="text-white bg-yellow-700 hover:bg-yellow-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer "
            onClick={() => dispatch(hide())}
          >
            Cancel
          </a>
        </form>
      </div>
    </div>
  );
}
