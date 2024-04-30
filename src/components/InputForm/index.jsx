import Input from "./Input";
import Label from "./Label";

export default function InputForm({
  label,
  type,
  name,
  defaultValue,
  placeholder,
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
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}
