import { ButtonComponent } from "./styles";

interface ButtonProps {
  label: string;
  onClick: () => void; 
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};
