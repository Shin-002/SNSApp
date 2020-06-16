import React from 'react';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import Navbar from './components/Navbar';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#aa647b'
    },
  },
  tupography: {
    fontfamily: 'Comic Neue',
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
