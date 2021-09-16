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
        "#root": {
          fontFamily: "OpenSans",
        },
      },
    },
    MuiContainer: {
      root: {
        paddingTop: defaultTheme.spacing(3),
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 8,
        backgroundColor: palette.primary.main,
        width: 40,
        height: 40,
      },
      colorPrimary: {
        "&:hover": {
          backgroundColor: darken(palette.primary.main, 0.1),
        },
      },
    },
  },
});
