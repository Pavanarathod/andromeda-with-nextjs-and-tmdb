const Button = ({ children }) => {
  return (
    <button className="px-5 py-2 bg-green-600 hover:bg-green-500 shadow-md hover:shadow-2xl text-white font-mono">
      {children}
    </button>
  );
};

export default Button;
