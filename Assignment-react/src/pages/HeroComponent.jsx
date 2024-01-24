import React from 'react';
import { Avatar, Box, Grid, Typography, InputBase, Button, Stack } from '@mui/material';
import userpic from '../assets/userpic.png';
import dotsbg from '../assets/dots-bg.svg';
import lettuce from '../assets/pngtree—lettuce.png';
import salad from '../assets/Pngtree-delicious-food.png';
import food from '../assets/food.svg';
import location from '../assets/place-holder.svg';
import logo from '../assets/logo.svg';
import arrow1 from '../assets/left-arrow.svg';
import arrow2 from '../assets/right-arrow.svg';


const HeroComponent = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container height="100%" justifyContent="center" alignItems="center" >
        <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'left', position: 'absolute', top: 0, left: 150, width: '100%', zIndex: 4, pt: 2, pb: 2 }}>
          <Box>
            <img src={logo} alt="Logo" height="60px" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle1" fontWeight={700} color="#2E266F" sx={{ mr: 4 }}>Menu One</Typography>
            <Typography variant="subtitle1" fontWeight={700} color="#2E266F" sx={{ mr: 4 }}>Menu Two</Typography>
            <Typography variant="subtitle1" fontWeight={700} color="#2E266F" sx={{ mr: 4 }}>Menu Three</Typography>
            <Typography variant="subtitle1" fontWeight={700} color="#2E266F">Menu Four</Typography>
          </Box>
        </Grid>
        {/* Grid 1 (Size: 1) */}
        <Grid item xs={12} sm={1.5}>
          <Box
            sx={{
              width: '200px',
              height: '50px',
              ml: 5,
              mt: '80vh',
              bgcolor: '#3D7475',
              borderRadius: '0 25px 25px 0',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'right' }}>
              <img alt="location image" src={location} style={{ height: '30px', marginTop: '10px' }} />
              <Typography sx={{ color: "white", ml: 1.5, fontSize: '1.5rem', mr: 2, mt: '10px' }}>
                Indore
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Grid 2 (Size: 5) */}
        <Grid item xs={12} sm={5}>
          <Box sx={{ height: '100%', mt: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <img src={food} alt='food-img' width="60%" height="35%" />
            <Typography variant='h3' color="#2E266F" fontWeight={700}>
              Discover Restaurant & Delicious Food
            </Typography>
            <Box
              sx={{
                mt: 4,
                width: '500px',
                height: '4rem',
                ml: 0,
                display: "flex",
                alignItems: "center",
                boxShadow: "0px 0px 18px rgba(255, 87, 34, 0.2)", // Pinkish box shadow
              }}
            >
              <InputBase
                placeholder="search restaurant, food"
                sx={{
                  flexGrow: 1,
                  ml: 2,
                  p: 1,
                  color: "text.primary",
                }}
              />
              <Button
                variant="contained"
                sx={{

                  backgroundColor: "#3D7475",
                  color: "white",
                  mr: 1,
                  width: '130px',
                  height: '3.2rem',
                  borderRadius: '32px 0 0 0',
                  fontWeight: '700',
                  fontSize: '25px',
                  '&:hover': {
                    backgroundColor: "#3D7475"
                  }
                }}
              >
                Go
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Grid 3 */}
        <Grid item xs={12} sm={2.5} sx={{ backgroundColor: '#fff', height: '100%' }}>
          <img
            src={dotsbg}
            alt="Image 1"
            style={{ position: 'absolute', top: 90, height: '80%', right: 35, width: '65%', zIndex: 1 }}
          />

          {/* Image 2 (On top of Image 1) */}
          <img
            src={lettuce}
            alt="Image 2"
            style={{ position: 'absolute', height: '90%', width: '30%', right: 140, top: -55, zIndex: 2 }}
          />

          {/* Image 3 (On top of Image 2) */}
          <img
            src={salad}
            alt="Image 3"
            style={{ position: 'absolute', bottom: 0, right: 80, width: '40%', top: 90, height: '85%', zIndex: 3 }}
          />
        </Grid>

        {/* Grid 4 */}
        <Grid item xs={12} sm={3} sx={{ backgroundColor: '#3d7475', height: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 10, ml: 0, width: '330px', zIndex: 4, }}>
            <Avatar alt="user pic" src={userpic} />
            <Typography sx={{ color: "white", ml: 2 }}>
              User
              <span style={{ color: 'white', fontSize: '0.6rem', verticalAlign: 'middle', marginLeft: 2 }}> ▼</span>
            </Typography>
            </Box>
            <Box
              sx={{
                // mt: '80vh',
                mt: '90vh',
                ml: 15,
                display: 'flex',
                flexDirection: 'row'
              }}
            >
                <img src={arrow1} height="40px" style={{marginRight: 20}} />
                <img src={arrow2} height="40px" />
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroComponent;
