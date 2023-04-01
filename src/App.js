import {RouterProvider} from "react-router-dom";
import router from './Routes/mainRoutes.js';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f4f6f8',
    },
    secondary: purple
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight : 400,
    fontWeightRegular : 500,
    fontWeightMedium : 600,
    fontWeightBold : 700,
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
