import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Changing default breakpoints of MUI
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // extra-small screens
      sm: 768, // small screens
      md: 900, // medium screens
      lg: 1200, // large screens
      xl: 1536, // extra-large screens
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
