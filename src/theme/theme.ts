import { createTheme } from "@material-ui/core/styles";

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
    light: "#0085FF",
  },
  secondary: {
    main: "#fff",
  },
};
const defaultTheme = createTheme({});

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "OpenSans, Arial",
    h2: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: "36px",
      color: "#1F1F1F",
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "30px",
      color: "#ffffff",
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
      color: "#0085FF",
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      color: "#272727",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
      color: "#1F1F1F",
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "19px",
      color: palette.primary.main,
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
          overflowX: "hidden",
        },
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
      body: {
        color: "#1F1F1F",
      },
    },
    MuiDialogContent: {
      root: {
        overflowY: "unset",
        padding: defaultTheme.spacing(4, 3),
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: "14px",
        color: palette.primary.dark,
        fontWeight: 700,
        lineHeight: "19px",
        marginBottom: defaultTheme.spacing(1),
      },
    },
    MuiInputBase: {
      input: {
        height: 40,
        border: "1px solid #0085FF",
        borderRadius: 4,
        padding: defaultTheme.spacing(1, 2),
        boxSizing: "border-box",
      },
    },
    MuiChip: {
      outlinedPrimary: {
        color: palette.primary.dark,
        boxShadow: " 0px 0px 20px rgba(7, 87, 182, 0.08)",
        border: "none",
      },
      deleteIconOutlinedColorPrimary: {
        color: palette.primary.dark,
      },
    },
  },
});
