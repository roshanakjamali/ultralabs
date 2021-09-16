import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
    },
  })
);

export { useStyles };
