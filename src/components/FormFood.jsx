import InputForm from "./InputForm";

export default function FormFood({ food }) {
  console.log(food);
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center mt-3">Form Food</h1>
      <form className="max-w-sm mx-auto">
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
