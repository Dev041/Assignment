import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import playstore from '../assets/'
import playstore from '../assets/google-play-badge.png'
import appstore from '../assets/App_Store_Badge.png'
import appScreen from '../assets/app-screen.png'
import cauliflower from '../assets/1cauliflower.png'
import dotsBg from '../assets/dots-bg1.png'


const DownloadApp = () => {
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
            <img src= {playstore} alt='app-download-android' />
            <img src= {appstore}  alt='app-download-apple'/>
        </Box>
      </Grid>
      <Grid item xs={6} style={{ position: 'relative' }}>
        <img
          style={{ position: 'absolute', top: 0, left: 140, zIndex: 2, height: '700px', width: '400px' }}
          src={appScreen}
          alt='app-screen'
        />
        <img
          style={{ position: 'absolute', top: 230, left: 20, zIndex: 1, height: '400px' }}
          src={cauliflower}
          alt='cauliflower'
        />
         <img
          style={{ position: 'absolute', top: 115, left: 110, zIndex: 1, height: '300px' }}
          src={dotsBg}
          alt='cauliflower'
        />
      </Grid>
    <Grid item xs={1}></Grid>

    </Grid>
  </Box>
  )
}

export default DownloadApp;