import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    label: {
      marginLeft: theme.spacing(3),
    },
    avatar: {
      display: "inline-flex",
      marginRight: theme.spacing(2),
    },
    box: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export { useStyles };
