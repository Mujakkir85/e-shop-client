import React, { useEffect, useState } from 'react';
import AllProducts from './All-Products/AllProducts';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch(`http://localhost:3005/products?_page=1&_limit=9`)
            .then(Response => Response.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })

    }, [])

    console.log(products);

    const fetchProducts = async (currentPage) => {
        const res = await fetch(`http://localhost:3005/products?_page=${currentPage}&_limit=9`)
        const data = await res.json()
        return data;
    }

    const handlePageClick = async (pagedata) => {
        console.log(pagedata.selected);

        let currentPage = pagedata.selected + 1;
        const productFromSever = await fetchProducts(currentPage);
        setProducts(productFromSever);
    }

    return (
        <Container>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    products.map(product => <AllProducts
                        key={product.id}
                        product={product}>
                    </AllProducts>)
                }
            </div>

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={25}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

        </Container >

    );
};

export default Home;