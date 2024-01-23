import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import delivery from '../assets/free-home-delivery-at-your-door-steps.svg';
import dotsbg from '../assets/dots-bg2.svg';
import arrow from '../assets/arrow2.svg';

const DineIn = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <Grid container sx={{ mt: '10vh', mb: '10vh' }}>
                {/* Grid 1 (Size: 1) */}
                <Grid item xs={12} sm={2}>
                </Grid>

                {/* Grid 2 (Size: 4) */}
                <Grid item xs={12} sm={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box sx={{ height: '100px', mr: 3, width: '25px', backgroundColor: '#3D7475' }} />
                        <Stack>
                            <Typography variant='h3' fontWeight={600} color="#2E266F">
                                Our
                            </Typography>
                            <Typography variant='h3' fontWeight={600} color="#2E266F">
                                Services
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>

                {/* Grid 3 (Size: 6) */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#707070", ml: 7 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid animi! Temporibus maiores hic sunt laborum tenetur illum maxime quia sed magni et in modi.
                    </Typography>
                </Grid>

                {/* Grid 4 (Size: 1) */}
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
            <Grid container sx={{ height: '70%', pl: 4, backgroundImage: `url(${dotsbg})`, backgroundSize: 'cover' }}>
                <Grid item xs={12} sm={2}></Grid>
                <Grid container xs={12} sm={9}>
                    <Grid item xs={7}>
                        <Typography>Hi</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: '#FAFAFA', width: '100%', height: '100%', mt: 2.5 }}>
                            <img src={delivery} alt='free-deliver-image' width="160px" height="130px" />
                            <Typography sx={{ fontWeight: '600', fontSize: '1.3rem', color: "#2E266F", mt: 2 }} >free home deliver</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: '1.3rem', color: "#2E266F" }} >at your door steps</Typography>
                            <Typography sx={{ width: '170px', ml: '50%', mr: '50%', mb: 2, color: '#707070', fontWeight: '600' }}> Lorem ipsum dolor sit amet consectetur elit sit amet</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Box sx={{ width: '150px', height: '3px', background: '#3D7475', borderRadius: 4, mr: 0.5 }}> </Box>
                                <Box sx={{ width: '20px', height: '3px', background: '#3D7475', borderRadius: 4 }}></Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>

        </Box>
    );
};

export default DineIn;