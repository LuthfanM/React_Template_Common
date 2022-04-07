import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function combineGradient(color1, color2) {
  return `linear-gradient(${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  lighterLight: "#faffd2",
  lighter: "#f3ff89",
  light: "#4f6bd5",
  main: "#2142bc",
  dark: "#0d288e",
  darker: "#021764",
  contrastText: "#fff",
};
const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#FFFFFF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};
const BG_MAIN = {
  main: '#e00b0b',
  darker: '#780303',
  global: '#FFFFF',
};
const BG_SECONDARY = {
  darker: '#013413',
};
const BG_PRIMARY_CARD = {
  red: '#8c0000',
  green:  '#07782f',
  purple: '#87008c'
};
const BG_SECONDARY_CARD = {
  red: '#c60404',
  green: '#04b843',
  purple: '#ad04c6'
};
const BG_TERTIARY_CARD = {
  red: '#f04141',
  green: '#25f06c',
  purple: '#ff8af8'
};
const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};
const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};
const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};
const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};
const COLOREDSHADOWS = {
  primary: "#e91e62",
  secondary: "#110e0e",
  info: "#00bbd4",
  success: "#4caf4f",
  warning: "#ff9900",
  error: "#f44336",
  light: "#adb5bd",
  dark: "#404040",
};
const CUSTOM = {
  softGrey: "#f2f9f7",
  softGrey2: "#d5e2f4",
  darkBrown: "#222227",
  blueCustom: "#070c80",
  blackCustom: "#282828",
  greyBlackCustom: "#393939",
  darkBlue: "#3539d8",
  darkBlack: "#232227",
  bluePurle: "#2242bd",
  blackBrown: "#353537",
  lightBlueCustom: '#06417d'
};

//-----dont add more color to avoid add more variant. Create new const instead
const LightColor = {
  lightBlue: '#7ea9ff',
  lightGreen: '#73fcca',
  lightYellow: '#f1fc73',
  lightPurple: '#ff8de3'
}

const DarkColor = {
  darkBlue: '#05276c',
  darkGreen: '#06593b',
  darkYellow: '#494f09',
  darkPurple: '#64094e'
}
//----until here-------------------------------

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),

  bgGrey: createGradient(CUSTOM.softGrey, CUSTOM.softGrey2),
  bgGreyComb: combineGradient(CUSTOM.softGrey, CUSTOM.softGrey2),
  bgBlueComb: combineGradient(CUSTOM.darkBlue, CUSTOM.darkBlack),
};

const GRADIENTS_COLOR = {
  primary: {
    main: PRIMARY.dark,
    state: PRIMARY.light,
  },
};

const TABS = {
  indicator: { boxShadow: "#ddd" },
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const common = {
  main: '#fff',
  secondary:'#000'
}

const palette = {
  common: { black: "#000", white: "#fff" },
  custom: { ...CUSTOM },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  gradients_color: GRADIENTS_COLOR,
  lightColor: LightColor,
  darkColor: DarkColor,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[0], disabled: GREY[500] },
  background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
  primaryBackground: BG_MAIN,
  secondaryBackground: BG_SECONDARY,
  cardBackground: { primary: BG_PRIMARY_CARD, secondary: BG_SECONDARY_CARD, tertiary: BG_TERTIARY_CARD},
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.58,
  },
  coloredShadows: { ...COLOREDSHADOWS },
  tabs: { ...TABS },
};

export default palette;
