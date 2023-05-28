interface Properties {
  children: string;
  color?: "primary" | "danger" | "success";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: Properties) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
