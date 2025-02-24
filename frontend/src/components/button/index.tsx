import { ButtonComponent } from "./styles";

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <ButtonComponent>{label}</ButtonComponent>;
};
