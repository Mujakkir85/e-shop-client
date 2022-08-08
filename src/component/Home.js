import React, { useEffect, useState } from 'react';
import AllProducts from './All-Products/AllProducts';
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })

    }, [])

    return (
        <Container>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex '>
                {
                    products.map(product => <AllProducts
                        key={product.id}
                        product={product}>
                    </AllProducts>)
                }
            </div>

        </Container >

    );
};

export default Home;