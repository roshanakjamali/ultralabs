import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { ProfileBackground } from "../../../helpers/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      height: "50vh",
      backgroundImage: `url(${ProfileBackground})`,
      padding: theme.spacing(4),
      marginBottom: theme.spacing(5),
    },
    button: {
      backgroundColor: "#ffffff",
      padding: theme.spacing(1, 3),
      color: theme.palette.primary.dark,
    },
    profile: {
      flexDirection: "column",
      textAlign: "center",
    },
    avatar: {
      width: 240,
      height: 240,
      margin: "auto",
      marginBottom: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.primary.dark,
      padding: theme.spacing(3),
      marginTop: theme.spacing(6),
    },
  })
);

export { useStyles };
