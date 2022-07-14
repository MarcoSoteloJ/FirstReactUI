import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

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
  },
});

export default theme;
