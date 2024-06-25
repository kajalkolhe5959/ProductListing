import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProduct = { name, description, price: parseFloat(price), quantity: parseInt(quantity), imgUrl };
            await axios.post('http://localhost:8080/products', newProduct);
            alert('Product added successfully!');
            setName('');
            setDescription('');
            setPrice('');
            setQuantity('');
            setImgUrl('');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please check the console for details.');
        }
    };

    return (
        <div>
            <Container>
                <h2>Add Product</h2>
                <Form onSubmit={handleSubmit} className=' '>
                    <div className="col-md-6">

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>imgUrl</Form.Label>
                            <Form.Control type="text" placeholder="Enter imgUrl" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;
