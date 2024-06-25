
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Homepage.css';
import img from "./img/product.png"
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>Welcome to Shopping!</Card.Title>
                                <br />
                                <Card.Text>
                                    <p >

                                        Discover endless possibilities with our curated collection of tech from around the world. Whether you're looking for laptop, or the latest trends, we've got you covered.<br />
                                    </p>

                                    Explore hassle-free shopping with intuitive navigation, personalized recommendations, and secure checkout. Join thousands of happy customers who rely on us for quality, convenience, and style.<br />
                                    <br />
                                    Start your shopping journey today and transform your ideas into reality with Us. Happy shopping!
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <img
                            className="img-fluid"
                            src={img}
                            alt="Placeholder"
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default HomePage;
