import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    label: {
      marginLeft: theme.spacing(3),
    },
  })
);

export { useStyles };
