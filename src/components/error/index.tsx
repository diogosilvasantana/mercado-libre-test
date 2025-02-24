import { Button } from "../button";

interface ErrorProps {
  error: {
    title: string;
    message: string;
    labelButton?: string;
  };
}

const ErrorComponent = ({ error }: ErrorProps) => {
  return (
    <>
      <h2>Erro</h2>
      <p>{error.message}</p>
      {error.labelButton && <Button label={error.labelButton} />}
    </>
  );
};

export default ErrorComponent;
