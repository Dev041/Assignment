import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import wonton from '../assets/the-wonton.png';
import sandwich from '../assets/fire-water.png';
import location from '../assets/place-holder.svg';
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
                <Grid item xs={12} sm={5}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#707070", ml: 7 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid animi! Temporibus maiores hic sunt laborum tenetur illum maxime quia sed magni et in modi, facilis ipsa accusantium dolorem, omnis ab optio dolorum quaerat. Ab, tenetur aliquid.
                    </Typography>
                </Grid>

                {/* Grid 4 (Size: 1) */}
                <Grid item xs={12} sm={1}></Grid>
            </Grid>
            <Grid container sx={{ height: '70%', pl: 4, backgroundImage: `url(${dotsbg})`, backgroundSize: 'cover' }}>
            </Grid>

        </Box>
    );
};

export default DineIn;