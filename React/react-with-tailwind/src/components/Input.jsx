export const Input = ({ onClick, type, placeholder, variant }) => {
  return (
    <span
      onClick={onClick}
      className="rounded-2xl p-8 text-2xl px-2 py-2 text-white bg-blue-500"
    >
      <input
        type={type}
        className="bg-blue-500 outline-none"
        placeholder={placeholder}
      />
    </span>
  );
};
