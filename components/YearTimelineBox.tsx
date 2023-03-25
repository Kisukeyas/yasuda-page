import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import TimelineItem from '@/components/TimelineItem'
import { useArticleData } from '@/hooks/useArticleData'

interface Props {
  year: string
}

const YearTimelineBox: FC<Props> = ({ year }) => {
  const { data } = useArticleData(year)
  return (
    <Box
      sx={{
        '@media (min-width:425px)': {
          display: 'flex',
        },
        marginBottom: '3rem',
      }}
    >
      <Typography variant='h2' sx={{ marginRight: '2rem' }} component='div'>
        {year}
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
          '@media (max-width:425px)': {
            marginTop: '1rem',
            marginLeft: '10px',
          },
        }}
      >
        {data.map((item) => {
          const publishedDate = dayjs(item.publishedAt)
          return (
            <TimelineItem
              key={item.id}
              path={item.path}
              publishedAt={publishedDate.format('MMM DD')}
            >
              <Typography sx={{ color: 'white', fontWeight: '700' }}>{item.title}</Typography>
              <Typography sx={{ fontSize: '.88em', marginTop: '0.6rem' }}>
                {publishedDate.format('MMM DD, YYYY')}
                {` liked Count ${item.likedCount}`}
              </Typography>
            </TimelineItem>
          )
        })}
      </Box>
    </Box>
  )
}

export default YearTimelineBox
