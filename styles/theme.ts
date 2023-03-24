import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '780px',
          marginTop: '4rem',
        },
      },
    },
  },
})
