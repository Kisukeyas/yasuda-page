import { AppBar, Avatar, IconButton, Toolbar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

function Header() {
  return (
    <AppBar position='fixed' sx={{ background: 'rgba(26,30,46,.5)' }}>
      <Toolbar sx={{ maxWidth: '780px', width: '100%', margin: '0 auto' }}>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
