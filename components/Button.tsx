const Button = ({title = '', onClick}) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-6 bg-blue-500 hover:bg-blue-400 rounded-tl-full text-white rounded-tr-sm rounded-bl-sm rounded-br-full text-sm border-transparent flex-shrink-0">
      {title}
    </button>
  );
};

export default Button;
