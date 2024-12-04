type ButtonProps = {
  label?: string;
};

const Button = ({ label = '' }: ButtonProps) => (
  <button onClick={() => alert(label || 'Default')}>Click</button>
);

export default Button;
