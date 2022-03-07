import { ContainerButton } from "./style";

const Button = ({ type, text, ...rest }) => {
  return (
    <ContainerButton>
      <button type={type} {...rest}>
        {text}
      </button>
    </ContainerButton>
  );
};

export default Button;
