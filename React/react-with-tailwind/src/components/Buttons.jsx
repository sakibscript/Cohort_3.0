export const Button = ({ disabled, children, onClick, variant }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-2xl text-2xl px-8 py-2 text-white cursor-pointer ${
        disabled ? "bg-blue-200" : "bg-green-400"
      }`}
    >
      {children}
    </span>
  );
};
