import PropTypes from "prop-types";
import { useMemo } from "react";
// material
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
// import componentsOverride from './overrides';
import GlobalStyles from "../layout/globalStyles";
import borders from "./borders";
import shadows, { customShadows } from "./shadows";
import boxShadows from "./boxShadows";
import functions from "./functions";

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
      boxShadows,
      functions,
      borders,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  // theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
