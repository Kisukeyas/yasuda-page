import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  publishedAt: string
  path: string
}

const TimelineItem: FC<Props> = ({ children, publishedAt, path }) => {
  return (
    <Box
      sx={{
        pl: '2rem',
        position: 'relative',
        ':not(:first-of-type)': {
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
      <Typography
        sx={{ fontSize: '.88em' }}
      >{`Published a post on zenn.dev ${publishedAt}`}</Typography>
      <Link
        href={`https://zenn.dev${path}`}
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
          textDecoration: 'none',
          marginTop: '1rem',
        }}
      >
        {children}
      </Link>
    </Box>
  )
}

export default TimelineItem
