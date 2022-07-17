import { createTheme } from "@mui/material";
import { cyan, orange } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: orange[100],
      contrastText: orange[900],
    },
  },
});

export default theme;
