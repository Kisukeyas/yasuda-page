import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#b6d9c9',
    },
  },
  typography: {
    body1: {
      color: 'rgba(6,4,0,.55)',
    },
    subtitle1: {
      color: '#060400',
    },
    h1: {
      color: '#060400',
      fontSize: '2.2rem',
      margin: '0',
      lineHeight: '1.4',
      fontWeight: '700',
    },
    h2: {
      color: '#060400',
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
          paddingLeft: '24px',
          paddingRight: '24px',
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
