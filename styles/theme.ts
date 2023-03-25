import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#1a1e2e',
    },
  },
  typography: {
    body1: {
      color: 'rgba(228,232,250,.55)',
    },
    subtitle1: {
      color: '#fff',
    },
    h1: {
      color: '#fff',
      fontSize: '2.2rem',
      margin: '0',
      lineHeight: '1.4',
      fontWeight: '700',
    },
    h2: {
      color: '#fff',
      fontSize: '1.3rem',
      margin: '0',
      lineHeight: '1.4',
      fontWeight: '700',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width:1200px)': {
            maxWidth: '780px',
          },
          maxWidth: '780px',
          marginTop: '4rem',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
})
