import { createTheme } from "@mui/material/styles";

const font = "'Montserrat'";
const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: font,
  },
});
export default theme;
