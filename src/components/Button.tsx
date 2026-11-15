
interface ButtonProps {
  texto: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default Button;
