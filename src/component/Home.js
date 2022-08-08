import React, { useEffect, useState } from 'react';
import AllProducts from './All-Products/AllProducts';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


const Home = () => {

    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const limit = 9;

    useEffect(() => {

        const getProducts = async () => {
            const Response = await fetch(`http://localhost:3005/products?_page=1&_limit=${limit}`);
            const allData = await Response.json();

            const total = Response.headers.get('x-total-count')
            // console.log(total);
            setPageCount(Math.ceil(total / limit));
            setProducts(allData)
        }

        getProducts()

    }, [limit])

    console.log(products);

    const fetchProducts = async (currentPage) => {
        const Res = await fetch(`http://localhost:3005/products?_page=${currentPage}&_limit=${limit}`)
        const data = await Res.json()
        return data;
    }

    const handlePageClick = async (pagedata) => {
        //console.log(pagedata.selected);
        let currentPage = pagedata.selected + 1;
        const productFromSever = await fetchProducts(currentPage);
        setProducts(productFromSever);
        window.scrollTo(0, 0)
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
            <div className='mt-5'>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
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
            </div>

        </Container >

    );
};

export default Home;