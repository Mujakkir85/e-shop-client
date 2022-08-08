import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AllProducts = ({ product }) => {

    const { id, category, img, name, seller, price } = product
    return (
        <div className='gy-5'>
            <Card style={{ width: '100%', height: '100%' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-5 fw-bold'>{name}</Card.Title>
                    <Card.Text><span className='fw-bold'>Price:</span> {price} $</Card.Text>
                    <Card.Text><span className='fw-bold'> Category:</span> {category}</Card.Text>
                    <Card.Text><span className='fw-bold'>Seller:</span> {seller}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default AllProducts;