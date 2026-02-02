import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { NavbarContainer } from './containers';
import { Landing, SignUp, Dashboard } from './pages';

// Custom dark theme with premium Gold & Dark styling
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4AF37', // Metallic Gold
      light: '#F4D03F',
      dark: '#B7950B',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#CCCCCC',
    },
    background: {
      default: '#000000', // Pure black
      paper: '#000000',   // Pure black for cards
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: '#ff6363',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Slightly sharper corners for a more premium look
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#D4AF37 transparent',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#D4AF37',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#F4D03F',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px', // Pill shaped buttons as per image
          padding: '10px 30px',
          fontSize: '0.95rem',
          boxShadow: 'none',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #D4AF37 0%, #B7950B 100%)',
          color: '#000',
          '&:hover': {
            background: 'linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%)',
            boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <NavbarContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
