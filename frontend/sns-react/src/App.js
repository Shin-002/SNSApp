import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import Navbar from './components/Navbar';

const primaly = cyan['A700'];
const theme = createMuiTheme({
    palette: {
      primary: cyan,
      secondary: {
        main: '#aa647b'
      },
    },
    typography: {
      fontFamily:'Comic Neue',
    }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar />
    </MuiThemeProvider>
  );
}

export default App;
