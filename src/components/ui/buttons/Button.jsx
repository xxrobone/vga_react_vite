import './Button.scss';

const Button = ({
  as: Btn = 'button',
  children,
  variant,
  onClick = () => {},
}) => {
  return (
    <Btn onClick={onClick} className={`btn ${[variant]}`}>
      {children}
    </Btn>
  );
};

export default Button;