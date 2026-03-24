import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#e07b4f", light: "#f5a97e", dark: "#a8522a" },
    background: { default: "#fdf6ee", paper: "#fffaf5" },
    text: { primary: "#2c1a0e", secondary: "#8a6550" },
  },
  typography: {
    fontFamily: "'Be Vietnam Pro', sans-serif",
    h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
    h3: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 700 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
});
