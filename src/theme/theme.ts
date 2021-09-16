import { createTheme, darken } from "@material-ui/core/styles";

import {
  OpenSansReg,
  OpenSansSemiBold,
  OpenSansLight,
  OpenSansBold,
} from "./typography/font";

const palette = {
  primary: {
    main: "#0085FF",
    dark: "#0C1446",
  },
};
const defaultTheme = createTheme({});

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "OpenSans, Arial",
    h6: {
      fontSize: 20,
      fontWeight: 700,
      color: "#272727",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24,
      color: "#1F1F1F",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          OpenSansReg,
          OpenSansSemiBold,
          OpenSansLight,
          OpenSansBold,
        ],
        body: {
          fontFamily: "OpenSans",
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiContainer: {
      root: {
        paddingTop: defaultTheme.spacing(3),
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1rem",
      },
    },
    MuiTableRow: {
      root: {
        backgroundColor: "#FDFDFD",
        "&:nth-of-type(odd)": {
          backgroundColor: "rgba(210, 217, 226, 0.15)",
        },
        "&$head": {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiTableCell: {
      root: {
        fontSize: "1rem",
        borderBottom: "none",
      },
      head: {
        fontWeight: 700,
        fontSize: "1rem",
        color: palette.primary.dark,
        lineHeight: "19px",
        "& svg": {
          fontSize: "1rem",
        },
      },
    },
  },
});
