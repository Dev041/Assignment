import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import playstore from './assets/google-play-badge.png'
import appstore from './assets/App_Store_Badge.png'

const download = () => {
  return (
    <Box sx={{ width: '100%',height: '100vh', bgcolor: '#FAFAFA'  }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

    <Grid item xs={1}></Grid>
          
      <Grid item xs={5} sx={{ mt: '30vh' }}>
        <Box sx={{display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ height: '110px',mr: 2.5, width: '30px', backgroundColor: '#3D7475' }} />
            <Typography variant='h3' fontWeight="bold" color="#2E266F">
                Download app for Exciting Deals
            </Typography>
        </Box>
        <Grid item xs={7} sx={{ ml: 5.2, mt: 2 }}>
        <Typography variant='body1' fontWeight="bold" sx={{color: '#707070'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        </Typography>
        </Grid>
        <Box sx={{ width: '30px',display: 'flex', flexDirection: 'row', ml: 3, mt: 2 }}>
            <img src= {playstore} />
            <img src= {appstore} />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Typography>hi</Typography>
      </Grid>
    <Grid item xs={1}></Grid>

    </Grid>
  </Box>
  )
}

export default download