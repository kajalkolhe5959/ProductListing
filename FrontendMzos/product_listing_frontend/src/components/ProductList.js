import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <Row md={4} className="g-4">
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card className="shadow p-3 mb-5 bg-body rounded">
                            <Card.Img variant="top" src={product.imgUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {/* Id-{product.id} <br /> */}
                                    <p className="card-text text-wrap">
                                        Description-{product.description}
                                    </p>
                                    <br />
                                    Price-{product.price}
                                    <br />
                                    Quatity-{product.quantity}
                                    <br />
                                </Card.Text>
                                <Button
                                    className="btn-primary"
                                    onClick={() => navigate(`/UpdateProduct/${product.id}`)}
                                >
                                    Modify
                                </Button>
                                &nbsp; &nbsp;
                                <Button
                                    className="btn-danger"
                                    onClick={() => navigate(`/DeleteProduct/${product.id}`)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductList;
