import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import TimelineItem from '@/components/TimelineItem'
import { ResponseData } from '@/@type/article-data.interface'

interface Props {
  data: ResponseData[]
  year: string
}

const YearTimelineBox: FC<Props> = ({ data, year }) => {
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
            background: 'rgba(6,4,0,.5)',
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
              <Typography sx={{ color: '#060400', fontWeight: '700' }}>{item.title}</Typography>
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
