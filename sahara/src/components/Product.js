import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Product = ({ title, image, description }) => {
  return (
    <Card>
      <CardMedia component="img" alt={title} height="140" image={image}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
