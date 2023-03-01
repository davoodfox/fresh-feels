import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const theme = createTheme({
  direction: "rtl",
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
        font-family: 'DanaFaNum';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('DanaFaNum'), local('DanaFaNum-Regular'), url(/dana-fanum.woff2) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      body {
        background-color: #F5F5F5;
      }
      `,
    },
  },
  palette: {
    primary: {
      main: "#B0BF24",
    },
  },
  typography: {
    fontFamily: "DanaFaNum",
  },
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RTL>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </RTL>
  </React.StrictMode>
);
