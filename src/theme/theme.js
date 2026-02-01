import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: '#2563eb',
            light: '#3b82f6',
            dark: '#1d4ed8',
          },
          secondary: {
            main: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
          },
          background: {
            default: '#f8fafc',
            paper: '#ffffff',
            gradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            card: 'rgba(255, 255, 255, 0.95)',
          },
          text: {
            primary: '#1e293b',
            secondary: '#64748b',
          },
          gradient: {
            primary: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
            secondary: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
          },
        }
      : {
          // Dark mode palette
          primary: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb',
          },
          secondary: {
            main: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
          },
          background: {
            default: '#0f172a',
            paper: '#1e293b',
            gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            card: 'rgba(30, 41, 59, 0.95)',
          },
          text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
          },
          gradient: {
            primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            secondary: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
          },
        }),
  },
  typography: {
    fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.1,
      '@media (max-width:900px)': {
        fontSize: '3rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.8rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.3s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: mode === 'light' 
              ? '0 20px 40px rgba(37, 99, 235, 0.2)'
              : '0 20px 40px rgba(59, 130, 246, 0.3)',
          },
        },
        contained: {
          background: mode === 'light'
            ? 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)'
            : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          color: 'white',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(10px)',
          border: mode === 'light' 
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: mode === 'light'
              ? '0 30px 60px rgba(0, 0, 0, 0.15)'
              : '0 30px 60px rgba(0, 0, 0, 0.4)',
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

const theme = (mode) => createTheme(getDesignTokens(mode));

export default theme;