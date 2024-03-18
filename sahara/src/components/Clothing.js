import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const products = [
    { id: 1, name: "Men's Crew T-Shirt Bundle", price: '$19.99', imageUrl: '/product_img/clothing1.png' },
    { id: 5, name: 'Product 5', price: '$19.99', imageUrl: '/path/to/image5.png' },
    { id: 6, name: 'Product 6', price: '$29.99', imageUrl: '/path/to/image6.png' },
    { id: 7, name: 'Product 7', price: '$39.99', imageUrl: '/path/to/image7.png' },
    { id: 8, name: 'Product 8', price: '$49.99', imageUrl: '/path/to/image8.png' },
    { id: 9, name: 'Product 9', price: '$19.99', imageUrl: '/path/to/image9.png' },
    { id: 10, name: 'Product 10', price: '$29.99', imageUrl: '/path/to/image10.png' },
    { id: 11, name: 'Product 11', price: '$39.99', imageUrl: '/path/to/image11.png' },
    { id: 12, name: 'Product 12', price: '$49.99', imageUrl: '/path/to/image12.png' },
    { id: 13, name: 'Product 13', price: '$19.99', imageUrl: '/path/to/image13.png' },
    { id: 14, name: 'Product 14', price: '$29.99', imageUrl: '/path/to/image14.png' },
    { id: 15, name: 'Product 15', price: '$39.99', imageUrl: '/path/to/image15.png' },
    { id: 16, name: 'Product 16', price: '$49.99', imageUrl: '/path/to/image16.png' },
];

const Clothing = () => {
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

export default Clothing;
