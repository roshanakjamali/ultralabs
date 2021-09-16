import Typography from "@material-ui/core/Typography";

import { LabelValueProps } from "./labelValue.interface";

const LabelValuePair = (props: LabelValueProps) => {
  const { label, value } = props;

  return (
    <>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </>
  );
};

export { LabelValuePair };
