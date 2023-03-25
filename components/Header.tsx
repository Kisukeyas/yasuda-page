import CheckIcon from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

function Header() {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleClick = () => {
    setIsOpenMenu(true)
  }
  const handleClose = () => {
    setIsOpenMenu(false)
  }
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
        <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'rgba(228,232,250,.55)' }}>
          <Link style={{ color: '#fff', textDecoration: 'none' }} href='/'>
            KisukeYas
          </Link>
          <Typography sx={{ fontWeight: '500', color: '#fff' }}>Timeline</Typography>
        </Breadcrumbs>
        <IconButton onClick={handleClick}>
          <KeyboardArrowDownIcon style={{ color: 'white' }} />
        </IconButton>
        {isOpenMenu && (
          <Box
            sx={{
              position: 'absolute',
              zIndex: '999',
              left: '200px',
              top: '50px',
              width: '140px',
              background: '#2b3047',
              borderRadius: '12px',
              padding: '6px',
              fontSize: '.95rem',
              boxShadow: '0 10px 20px -2px rgba(0,0,0,.4)',
              overflow: 'hidden',
            }}
          >
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '36px',
                padding: '0 10px 0 12px',
                width: '100%',
                color: 'rgba(228,232,250,.55)',
                textDecoration: 'none',
                textAlign: 'left',
              }}
              onClick={handleClose}
            >
              <Typography component={'div'} sx={{ flex: '1' }}>
                Home
              </Typography>
              <CheckIcon sx={{ fontSize: '1rem' }} />
            </Button>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '36px',
                padding: '0 10px 0 12px',
                width: '100%',
                color: 'rgba(228,232,250,.55)',
                textDecoration: 'none',
                textAlign: 'left',
              }}
              onClick={handleClose}
            >
              <Typography component={'div'} sx={{ flex: '1' }}>
                Timeline
              </Typography>
              <CheckIcon sx={{ fontSize: '1rem' }} />
            </Button>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '36px',
                padding: '0 10px 0 12px',
                width: '100%',
                color: 'rgba(228,232,250,.55)',
                textDecoration: 'none',
                textAlign: 'left',
              }}
              onClick={handleClose}
            >
              <Typography component={'div'} sx={{ flex: '1' }}>
                Portfolio
              </Typography>
              <CheckIcon sx={{ fontSize: '1rem' }} />
            </Button>
            <Button
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '36px',
                padding: '0 10px 0 12px',
                width: '100%',
                color: 'rgba(228,232,250,.55)',
                textDecoration: 'none',
                textAlign: 'left',
              }}
              onClick={handleClose}
            >
              <Typography component={'div'} sx={{ flex: '1' }}>
                About me
              </Typography>
              <CheckIcon sx={{ fontSize: '1rem' }} />
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
