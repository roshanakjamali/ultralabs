import Regular from "../../assets/fonts/open_sans/OpenSans-Regular.ttf";
import Bold from "../../assets/fonts/open_sans/OpenSans-Bold.ttf";
import SemiBold from "../../assets/fonts/open_sans/OpenSans-SemiBold.ttf";
import Light from "../../assets/fonts/open_sans/OpenSans-Light.ttf";

const OpenSansReg = {
  fontFamily: "OpenSans",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('OpenSans-Regular'),
    url(${Regular}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const OpenSansBold = {
  fontFamily: "OpenSans",
  fontStyle: "normal",
  fontWeight: 700,
  src: `
    local('OpenSans-Bold'),
    url(${Bold}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const OpenSansSemiBold = {
  fontFamily: "OpenSans",
  fontStyle: "normal",
  fontWeight: 600,
  src: `
    local('OpenSans-Bold'),
    url(${SemiBold}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const OpenSansLight = {
  fontFamily: "OpenSans",
  fontStyle: "normal",
  fontWeight: 300,
  src: `
    local('OpenSans-Bold'),
    url(${Light}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export { OpenSansReg, OpenSansSemiBold, OpenSansLight, OpenSansBold };
