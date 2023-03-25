import CheckIcon from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
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
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

const pageName = [
  {
    pathName: '',
    title: 'Home',
  },
  {
    pathName: 'timeline',
    title: 'Timeline',
  },
  {
    pathName: 'portfolio',
    title: 'Portfolio',
  },
  {
    pathName: 'about',
    title: 'About',
  },
]

const selectHeaderPathName = {
  timeline: 'Timeline',
  portfolio: 'Portfolio',
  about: 'About',
}

function Header() {
  const router = useRouter()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const closeModal = useCallback(() => {
    setIsOpenMenu(false)
    document.removeEventListener('click', closeModal)
  }, [])
  useEffect(() => {
    return () => {
      document.removeEventListener('click', closeModal)
    }
  }, [closeModal])
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpenMenu(true)
    document.addEventListener('click', closeModal)
    event.stopPropagation()
  }
  return (
    <AppBar position='fixed' sx={{ background: 'rgba(182,217,201, .5)' }}>
      <Toolbar sx={{ maxWidth: '780px', width: '100%', margin: '0 auto' }}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => router.push('/')}
        >
          <Avatar sx={{ bg: 'linear-gradient(#ffbc47,#ff7c4c)' }} src={'/images/avatar/dog1.png'} />
        </IconButton>
        <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'rgba(6,4,0,.55)' }}>
          <Link style={{ color: '#060400', textDecoration: 'none' }} href='/'>
            KisukeYas
          </Link>
          {router.pathname.replace('/', '') !== '' && (
            <Typography sx={{ fontWeight: '500', color: '#060400' }}>
              {
                selectHeaderPathName[
                  router.pathname.replace('/', '') as 'timeline' | 'portfolio' | 'about'
                ]
              }
            </Typography>
          )}
        </Breadcrumbs>
        <Box sx={{ position: 'relative' }}>
          {isOpenMenu ? (
            <IconButton onClick={() => closeModal}>
              <KeyboardArrowUpIcon style={{ color: '#060400' }} />
            </IconButton>
          ) : (
            <IconButton onClick={(event) => handleClick(event)}>
              <KeyboardArrowDownIcon style={{ color: '#060400' }} />
            </IconButton>
          )}
          {isOpenMenu && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: '999',
                left: '-40px',
                top: '40px',
                width: '140px',
                background: '#eeebda',
                borderRadius: '12px',
                padding: '6px',
                fontSize: '.95rem',
                boxShadow: '0 10px 20px -2px rgba(0,0,0,.4)',
                overflow: 'hidden',
              }}
            >
              {pageName.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '36px',
                    padding: '0 10px 0 12px',
                    width: '100%',
                    color:
                      router.pathname.replace('/', '') === item.pathName
                        ? '#060400'
                        : 'rgba(6,4,0,.55)',
                    textDecoration: 'none',
                    textAlign: 'left',
                  }}
                  onClick={() => router.push(item.pathName ? item.pathName : '/')}
                >
                  <Typography component={'div'} sx={{ flex: '1' }} color='inherit'>
                    {item.title}
                  </Typography>
                  {router.pathname.replace('/', '') === item.pathName && (
                    <CheckIcon sx={{ fontSize: '1rem' }} />
                  )}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
