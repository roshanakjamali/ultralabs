import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { Alert, AlertTitle } from "@material-ui/lab";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  const history = useHistory();

  return (
    <Alert
      severity="error"
      action={
        <Button color="inherit" size="small" onClick={() => history.goBack()}>
          Back
        </Button>
      }
    >
      <AlertTitle>Error</AlertTitle>
      There is an error on Server with Error: — <strong>{message}</strong>
    </Alert>
  );
};

export default Error;
