const Button = ({title = '', full = false, onClick = () => {}}) => {
  // Config
  const wFull = full ? 'w-full' : '';

  // Render
  return (
    <button
      onClick={onClick}
      className={`${wFull} py-2 px-6 bg-blue-500 hover:bg-blue-400 rounded-tl-full text-white rounded-tr-sm rounded-bl-sm rounded-br-full text-sm border-transparent flex-shrink-0 shadow-md`}>
      {title}
    </button>
  );
};

export default Button;
