import Input from "./input";
import Label from "./label";

export default function InputForm({
  label,
  type,
  name,
  defaultValue,
  onChange,
}) {
  return (
    <div className="mb-4">
      <Label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
        label={label}
      />
      <Input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}