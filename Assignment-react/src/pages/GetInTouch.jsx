import React from 'react';
import { Box, Grid, Typography, InputBase, InputAdornment } from '@mui/material';
import footerleaf from '../assets/footer-leaf.png';
import emailArrow from '../assets/arrow.svg';
import social1 from '../assets/fb.svg'
import social2 from '../assets/lin.svg'
import social3 from '../assets/insta.svg'


const GetInTouch = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={0} justifyContent="center">
        {/* First Vertical Grid */}
        <Grid item xs={4} sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <img
            style={{ 
                height: '100%', 
                width: '100%', 
                maxWidth: '450px', 
                maxHeight: '800px', 
                objectFit: 'cover', 
                borderRadius: '10px', 
                transform: 'rotate(10deg)' 
            }}
            src={footerleaf}
            alt='footer-leaf'
          />
        </Grid>

        {/* Second Vertical Grid */}
        <Grid item xs={12} sm={6} md={4} lg={4}
          sx={{ 
            textAlign: 'center', 
            position: 'relative', 
            zIndex: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
          >
          <Box sx={{ width: '100%' ,maxWidth: '450px', mt: 'auto', mb:'auto'}}>
            <Typography variant="h4" color="#2E266F">Get notified</Typography>
            <Typography variant="h4" color="#2E266F" sx={{ mb: 3 }}>about new amazing products</Typography>
            <Typography variant='body1' fontWeight={400} color="#2E266F">Lorem ipsum dolor sit amet consectetur adipisicing Tempore, natus minima ex quibsdam animi accusantium 
            </Typography>
            <InputBase
              placeholder="E-mail"
              sx={{
                width: '350px',
                mt: 7,
                p: 1,
                borderRadius: '50px',
                boxShadow: '0px 0px 18px rgba(46, 38, 111, 0.4)',
                color: '#2E266F',
                '&::placeholder': {
                  color: '#2E266F',
                },
                '&:focus': {
                  outline: 'none', 
                },
              }}
              endAdornment={
                <InputAdornment>
                  <img src={emailArrow} alt='arrow-image'/>
                </InputAdornment>
              }
            />
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                px: 2, 
                mt: 4,
                width: '400px',
                ml: 'auto',
                mr: 'auto' 
              }}
            >
              <Box>
                <Typography 
                variant="subtitle1" 
                fontSize="0.9rem" 
                fontWeight={400} 
                color="#2E266F"
                >
                  Product
                </Typography>
              </Box>
              <Box>
                <Typography 
                variant="subtitle1" 
                fontSize="0.9rem" 
                fontWeight={400} 
                color="#2E266F"
                >
                  Company
                </Typography>
              </Box>
              <Box>
                <Typography 
                variant="subtitle1" 
                fontSize="0.9rem" 
                fontWeight={400} 
                color="#2E266F"
                >
                  Learn More
                </Typography>
              </Box>
              <Box>
                <Typography 
                variant="subtitle1" 
                fontSize="0.9rem" 
                fontWeight={400} 
                color="#2E266F"
                >
                  Get in touch
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>


        {/* Third Vertical Grid */}
        <Grid item xs={2}>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            // justifyContent: 'space-around',
            alignItems: 'flex-start',
            width: '400px',
            ml: 'auto',
            mr: 'auto',
            mt: '90vh'
          }}
        >
              
          <img src={social1} style={{ marginLeft: '20px' }} alt="social-1"/>
          <img src={social2} style={{ marginLeft: '20px' }} alt="social-2"/>
          <img src={social3} style={{ marginLeft: '20px' }} alt="social-3"/>
          <Typography fontSize="0.6rem" sx={{ ml:2.5, mr: 2 }}>© Techverse World</Typography>
        </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Box>
  );
};

export default GetInTouch;
