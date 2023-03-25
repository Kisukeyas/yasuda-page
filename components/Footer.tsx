import CopyrightIcon from '@mui/icons-material/Copyright'
import { Typography } from '@mui/material'
import Link from 'next/link'

function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '2rem 0',
      }}
    >
      <Typography
        component={'div'}
        sx={{
          fontSize: '.88rem',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CopyrightIcon sx={{ fontSize: 'small' }} />
        2023 KisukeYas
      </Typography>
      <Link
        href={'terms-and-privacy'}
        style={{ color: 'inherit', fontSize: '.88rem', fontWeight: '500' }}
      >
        Terms and Privacy
      </Link>
    </footer>
  )
}

export default Footer
