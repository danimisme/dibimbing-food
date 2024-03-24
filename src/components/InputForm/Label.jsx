export default function Label({ label, name }) {
  return (
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      {label}
    </label>
  );
}
