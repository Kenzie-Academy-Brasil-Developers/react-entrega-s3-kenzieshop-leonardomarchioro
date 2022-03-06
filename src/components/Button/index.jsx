const Button = ({ type, text, ...rest }) => {
  return (
    <div>
      <button type={type} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
