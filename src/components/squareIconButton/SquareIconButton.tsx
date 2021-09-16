import { createStyles, darken, IconButton, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const SquareIconButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      width: 40,
      height: 40,
    },
    colorPrimary: {
      "&:hover": {
        backgroundColor: darken(theme.palette.primary.main, 0.1),
      },
    },
  })
)(IconButton);

export { SquareIconButton };
