import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import wonton from '../assets/the-wonton.png';
import sandwich from '../assets/fire-water.png';
import location from '../assets/place-holder.svg';
import dotsbg from '../assets/dots-bg1.png';
import arrow from '../assets/arrow2.svg';

const DineIn = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <Grid container sx={{ mt: '10vh', mb: '15vh' }}>
                {/* Grid 1 (Size: 1) */}
                <Grid item xs={12} sm={2}>
                </Grid>

                {/* Grid 2 (Size: 4) */}
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ height: '80px', mr: 2.5, width: '25px', backgroundColor: '#3D7475' }} />
                        <Typography variant='h4' fontWeight={600} color="black">
                            some top restaurant for dining out or in!
                        </Typography>
                    </Box>
                </Grid>

                {/* Grid 3 (Size: 6) */}
                <Grid item xs={12} sm={5}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#707070", ml: 7 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid animi! Temporibus maiores hic sunt laborum tenetur illum maxime quia sed magni et in modi, facilis ipsa accusantium dolorem, omnis ab optio dolorum quaerat. Ab, tenetur aliquid.
                    </Typography>
                </Grid>

                {/* Grid 4 (Size: 1) */}
                <Grid item xs={12} sm={1}></Grid>
            </Grid>
            <Grid container sx={{ height: '100%', mb: '10vh', pl: 4 }}>
                <Grid container spacing={3} item xs={12} sm={8} >
                    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                        {/* First Child Grid */}
                        <Grid item xs={6} sx={{ position: 'relative', mr: 7 }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '43%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '100%',
                                    height: '25%',
                                    backgroundColor: 'rgba(82, 115, 112, 0.8)',
                                    padding: 2,
                                    zIndex: 2,
                                    boxSizing: 'border-box',
                                    borderRadius: '8px',
                                }}
                            >
                                <Box sx={{ ml: 2, mr: 2 }}>
                                    <Typography variant="h4" fontWeight={700} color="white">
                                        Fire Water
                                    </Typography>
                                    <Typography fontSize="12px" color="white">
                                        We are all about we are all about to the fullest and all the content dining out or in! dining out or in!
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', mt: 1 }}>
                                        <img alt="location image" src={location} style={{ height: '20px', marginTop: '10px' }} />
                                        <Typography sx={{ color: "white", ml: 1, fontSize: '0.8rem', 
                                        mr: 8, mt: '10px' }}>
                                            Mumbai city
                                        </Typography>
                                        <Button sx={{ background: 'white', color: '#3D7475', 
                                        fontSize: '12px', fontWeight: 'bold', mt: 1, width: '120px',
                                        borderRadius: '0 0 8px 0', '&:hover': {
                                            backgroundColor: "white",
                                            color: '#3D7475'
                                          }}} endIcon={<ArrowRightAltIcon />}>
                                        Book Now</Button>
                                    </Box>
                                      
                                </Box>
                            </Box>
                            <img src={dotsbg} alt="dots-background" style={{zIndex: 0, position: 'absolute', height: "40%", top: -30, left: -70 }} />
                            <img src={sandwich} alt= 'sandwich' height="350px" style={{ zIndex: 1, position: 'relative' }} />
                        </Grid>
                        {/* Second Child Grid */}
                        <Grid item xs={6} sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '43%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '100%',
                                    height: '25%',
                                    backgroundColor: 'rgba(82, 115, 112, 0.8)',
                                    padding: 2,
                                    zIndex: 2,
                                    boxSizing: 'border-box',
                                    borderRadius: '8px',
                                }}
                            >
                                <Box sx={{ ml: 2, mr: 2 }}>
                                    <Typography variant="h4" fontWeight={700} color="white">
                                        The Wonton
                                    </Typography>
                                    <Typography fontSize="12px" color="white">
                                        We are all about we are all about to the fullest and all the content dining out or in! dining out or in!
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', mt: 1 }}>
                                        <img alt="location image" src={location} style={{ height: '20px', marginTop: '10px' }} />
                                        <Typography sx={{ color: "white", ml: 1, fontSize: '0.8rem', 
                                        mr: 8, mt: '10px' }}>
                                            Indore city
                                        </Typography>
                                        <Button sx={{ background: 'white', color: '#3D7475', 
                                        fontSize: '12px', fontWeight: 'bold', mt: 1, width: '120px',
                                        borderRadius: '0 0 8px 0', '&:hover': {
                                            backgroundColor: "white",
                                            color: '#3D7475'
                                          }}} endIcon={<ArrowRightAltIcon />}>
                                        Book Now</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <img src={dotsbg} alt="dots-background" style={{zIndex: 0, position: 'absolute', height: "40%", bottom: 253, left: 120 }} />
                            <img src={wonton} alt= 'wonton' height="350px" style={{ zIndex: 1, position: 'relative' }} />
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box sx={{ height: '100%', width: '200px', mt: '50%', mb: '50%', ml: '0px'}}>
                        <img src={arrow} alt='arrow-image'  />
                        <Typography variant='h6' color="#1C443C" sx={{ mt: 1, ml: 4 }}>see more</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
        </Box>
    );
};

export default DineIn;