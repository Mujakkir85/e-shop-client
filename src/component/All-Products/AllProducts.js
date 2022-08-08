import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AllProducts = ({ product }) => {

    const { id, category, img, name, seller, price } = product
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>Category: {category}</Card.Text>
                    <Card.Text>Seller: {seller}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default AllProducts;