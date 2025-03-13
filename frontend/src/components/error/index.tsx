import { Button } from "../button";
import { ErrorContainer } from "./styles";

/* Componente genérico para tratar
 *cenários de erros do servico
 */

interface ErrorProps {
  error: {
    title: string;
    message: string;
    labelButton?: string;
  };
  onButtonClick:() => void;
}

const ErrorComponent = ({ error, onButtonClick }: ErrorProps) => {
  return (
    <ErrorContainer>
      <h2>Erro</h2>
      <p>{error.message}</p>
      {error.labelButton && <Button label={error.labelButton} onClick={onButtonClick} />}
    </ErrorContainer>
  );
};

export default ErrorComponent;
