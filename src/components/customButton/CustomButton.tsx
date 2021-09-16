import { createStyles, darken, Button, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CustomButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(3),
      backgroundColor: theme.palette.primary.light,
      fontSize: "1rem",
      lineHeight: "24px",
      boxShadow: "0px 0px 8px 1px rgba(7, 87, 182, 0.15)",
    },
    containedSecondary: {
      "&:hover": {
        backgroundColor: darken(theme.palette.primary.light, 0.1),
        boxShadow: "0px 0px 8px 1px rgba(7, 87, 182, 0.25)",
      },
    },
    startIcon: {
      color: "#03BC90",
    },
  })
)(Button);

export { CustomButton };
