import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

function Timeline() {
  return (
    <>
      <Header />
      <Container>
        <Box sx={{ height: '2rem' }} />
        <Typography variant='h1'>Timeline</Typography>
        <Box sx={{ height: '3.6rem' }} />
        <Box
          sx={{
            '@media (min-width:425px)': {
              display: 'flex',
            },
          }}
        >
          <Typography variant='h2' sx={{ marginRight: '2rem' }} component='div'>
            2022
          </Typography>
          <Box
            sx={{
              position: 'relative',
              flex: '1',
              ':before': {
                content: '""',
                position: 'absolute',
                left: '-2px',
                top: '10px',
                bottom: '0',
                width: '2px',
                background: 'rgba(232,231,255,.09)',
              },
            }}
          >
            <Box
              sx={{
                pl: '2rem',
                position: 'relative',
                ':not(:first-child)': {
                  marginTop: '2.7rem',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  top: '2px',
                  left: '-9px',
                  backgroundColor: '#4f536a',
                  border: '4px solid #1a1e2e',
                }}
              ></Box>
              <Typography>Text</Typography>
              <Link
                href={'/'}
                style={{
                  padding: '1.3rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: '1.5',
                  zIndex: '2',
                  fontSize: '.95rem',
                  borderRadius: '14px',
                  background: '#2b3047',
                  boxShadow: '0 1px 2px rgba(0,0,0,.1)',
                }}
              >
                <Typography>text</Typography>
                <Typography>text</Typography>
              </Link>
            </Box>
            <Box
              sx={{
                pl: '2rem',
                position: 'relative',
                ':not(:first-child)': {
                  marginTop: '2.7rem',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '1rem',
                  height: '1rem',
                  borderRadius: '50%',
                  top: '2px',
                  left: '-9px',
                  backgroundColor: '#4f536a',
                  border: '4px solid #1a1e2e',
                }}
              ></Box>
              <Typography>Text</Typography>
              <Link
                href={'/'}
                style={{
                  padding: '1.3rem 1.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  lineHeight: '1.5',
                  zIndex: '2',
                  fontSize: '.95rem',
                  borderRadius: '14px',
                  background: '#2b3047',
                  boxShadow: '0 1px 2px rgba(0,0,0,.1)',
                }}
              >
                <Typography>text</Typography>
                <Typography>text</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Timeline
