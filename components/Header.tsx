import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  return (
    <AppBar position='fixed' sx={{ background: 'rgba(26,30,46,.5)' }}>
      <Toolbar sx={{ maxWidth: '780px', width: '100%', margin: '0 auto' }}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => router.push('/')}
        >
          <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
        </IconButton>
        <Typography variant='h2'>KisukeYas</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
