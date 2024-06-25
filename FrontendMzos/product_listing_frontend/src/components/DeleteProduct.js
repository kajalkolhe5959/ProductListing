// // src/components/ProductList.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function ProductList() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:8080/products')
//             .then(response => response.json())
//             .then(data => setProducts(data));
//     }, []);

//     const handleDelete = (id) => {
//         fetch(`http://localhost:8080/products/${id}`, {
//             method: 'DELETE',
//         }).then(() => {
//             setProducts(products.filter(product => product.id !== id));
//         });
//     };

//     return (
//         <div>
//             <h1>Delete Product</h1>

//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name}

//                         <button onClick={() => handleDelete(product.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ProductList;


// src/components/ProductDelete.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Alert, Card, Row, Col } from 'react-bootstrap';

function ProductDelete() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setMessage('Product deleted successfully!');
            setTimeout(() => {
                window.location.href = '/'; // Redirect to product list after 2 seconds
            }, 2000); // Redirect after 2 seconds
        });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>Delete Product</h1>
            {message && <Alert variant="success">{message}</Alert>}
            <p>Are you sure you want to delete the following product?</p>
            <Row className='g-4'>
                <Col>

                    <Card className="shadow  bg-body rounded">
                        <Card.Img variant="top" src={product.imgUrl} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                Id-{product.id} <br />
                                Description-{product.description}<br />
                                Price-{product.price}<br />
                                Quatity-{product.quantity}<br />
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
            <Link to="/" className="btn btn-secondary ml-2">Cancel</Link>
        </Container>
    );
}

export default ProductDelete;
