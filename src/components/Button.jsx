const Button = ({ text = "Social-link" }) => {
  return (
    <button className="bg-grey-700 hover:bg-green hover:text-grey-700 h-11 cursor-pointer rounded-lg p-3 text-sm font-bold capitalize transition duration-300 ease-in-out">
      {text}
    </button>
  );
};
export default Button;
