export default function Input({
  type,
  name,
  placeholder,
  onChange,
  defaultValue,
}) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      required
    />
  );
}
