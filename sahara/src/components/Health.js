import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const products = [
    { id: 3, name: "Assorted Weights", price: '$89.99', imageUrl: '/product_img/health1.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
];

const Health = () => {
    const navigate = useNavigate();
    return (
        <div className="page">
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <Card className="productCard">
                            <CardActionArea disableRipple onClick={() => navigate(`/product/${product.id}`)}>
                                <CardMedia component="img" height="300" image={product.imageUrl} alt={product.name}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        {product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Health;
