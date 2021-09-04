const Button = ({ children }) => {
  return (
    <button className="px-5 py-2 bg-green-500 hover:bg-green-400 hover:shadow-lg text-white font-mono rounded-md">
      {children}
    </button>
  );
};

export default Button;
