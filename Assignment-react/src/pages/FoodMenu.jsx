import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import hamSandwich1 from '../assets/ham-sandwich.png';
import hamSandwich2 from '../assets/1ham-sandwich.png';
import hamSandwich3 from '../assets/2ham-sandwich.png';
import hamSandwich4 from '../assets/3ham-sandwich.png';
import hamSandwich5 from '../assets/4ham-sandwich.png';
import hamSandwich6 from '../assets/5ham-sandwich.png';

const foodItems = [
  {
    id: 1,
    name: 'Ham Sandwich',
    price: '$10.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: hamSandwich1,
  },
  {
    id: 2,
    name: 'Ham Sandwich',
    price: '$10.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: hamSandwich2,
  },
  {
    id: 3,
    name: 'Ham Sandwich',
    price: '$10.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: hamSandwich3,
  },
  {
    id: 4,
    name: 'Ham Sandwich',
    price: '$10.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: hamSandwich4,
  },
  {
    id: 5,
    name: 'Ham Sandwich',
    price: '$10.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: hamSandwich5,
  },
  {
    id: 6,
    name: 'Ham Sandwich',
    price: '$10.50',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl: hamSandwich6,
  },
];

const FoodMenu = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item xs={8} container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: 'center', mb: 0 }}>
                <Typography variant="h4" fontWeight={600} color="#2E266F">
                  Explore our Foods
                </Typography>
            </Grid>
            <Grid item xs={9} sx={{ ml: 10, textAlign: 'center', mb: 2 }}>
            <Typography variant="body6" color="#CCCFD0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, itaque nostrum laborum corporis numquam neque maiores corporis numquam neque maiore
                </Typography>
            </Grid>
          {foodItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
              <Card sx={{ borderRadius: 2, boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component="img"
                  alt={item.name}
                  image={item.imgUrl}
                  sx={{ objectFit: 'cover', height: 180 }}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" fontWeight="bold" color= '#3D7475' component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" color='#3D7475'>
                    {item.price}
                  </Typography>
                </CardContent>
                <CardContent sx={{pt: '0px'}}>
                  <Typography variant="body6" color="#CCCFD0">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodMenu;
