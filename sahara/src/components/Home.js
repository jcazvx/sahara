import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const products = [
    { id: 1, name: "Men's Crew T-Shirt Bundle", price: '$19.99', imageUrl: '/product_img/clothing1.png' },
    { id: 2, name: "Undeniable Beauty Gummies", price: '$29.99', imageUrl: '/product_img/beauty1.png' },
    { id: 3, name: "Assorted Weights", price: '$89.99', imageUrl: '/product_img/health1.png' },
    { id: 2, name: "USB Charger", price: '$29.99', imageUrl: '/product_img/electronics1.png' },
    { id: 5, name: 'Outdoor Travel Oven', price: '$99.99', imageUrl: '/product_img/outdoors1.png' },
    { id: 6, name: 'Toy Bow and Arrows', price: '$29.99', imageUrl: '/product_img/toys1.png' },
    { id: 6, name: 'Scrub Daddy', price: '$29.99', imageUrl: '/product_img/roomkitchen1.png' },
    { id: 8, name: 'Product', price: '$49.99', imageUrl: '/path/to/image8.png' },
];

const Home = () => {
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

export default Home;
