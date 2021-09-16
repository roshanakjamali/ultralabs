import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionButton: {
      margin: theme.spacing(5, 1, 2, 0),
    },
  })
);

export { useStyles };
