import { createTheme } from '@mui/material/styles';

const primaryColor = '#005eb4' 
const secondaryColor = '#ffc64d'
const defaultColor = '#FFFFFF'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
        main: secondaryColor,
    },
    tabColor: {
        default: defaultColor,
        active: '#ffc64d',
    },
  },
});

export default theme;