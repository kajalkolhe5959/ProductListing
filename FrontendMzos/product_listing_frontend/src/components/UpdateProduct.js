// // src/components/ProductEdit.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Button, Form } from 'react-bootstrap';

// function ProductEdit() {
//   const { id } = useParams();
//   const [product, setProduct] = useState({ name: '', description: '', price: 0, quantity: 0, imgUrl: '' });
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch(`http://localhost:8080/products/${id}`)
//       .then(response => response.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch(`http://localhost:8080/products/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(product),
//     }).then(() => {
//       setMessage('Product updated successfully!');
//     });
//   };

//   return (
//     <div>

//       <h2>Add Product</h2>
//       <Form onSubmit={handleSubmit} className='row g-3'>
//         <div className="col-md-6">

//           <Form.Group className="mb-3" controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter name" value={product.name} onChange={handleChange} required />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="description">
//             <Form.Label>Description</Form.Label>
//             <Form.Control type="text" placeholder="Enter Description" value={product.description} onChange={handleChange} required />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="name">
//             <Form.Label>Price</Form.Label>
//             <Form.Control type="number" placeholder="Enter Price" value={product.price} onChange={handleChange} required />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="name">
//             <Form.Label>Quantity</Form.Label>
//             <Form.Control type="number" placeholder="Enter Quantity" value={product.quantity} onChange={handleChange} required />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="name">
//             <Form.Label>imgUrl</Form.Label>
//             <Form.Control type="text" placeholder="Enter imgUrl" value={product.imgUrl} onChange={handleChange} required />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>

//         </div>
//       </Form>
//       {/* <h1>Edit Product</h1>
//       {message && <p>{message}</p>}


//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={product.name} onChange={handleChange} />
//         </label>
//         <label>
//           Description:
//           <input type="text" name="description" value={product.description} onChange={handleChange} />
//         </label>
//         <label>
//           Price:
//           <input type="number" name="price" value={product.price} onChange={handleChange} />
//         </label>
//         <label>
//           Quantity:
//           <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
//         </label>
//         <label>
//           Image URL:
//           <input type="text" name="imgUrl" value={product.imgUrl} onChange={handleChange} />
//         </label>
//         <button type="submit">Save</button>
//       </form> */}
//       {/* <Link to="/">Back to Product List</Link> */}
//     </div>
//   );
// }

// export default ProductEdit;


// src/components/ProductEdit.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', description: '', price: 0, quantity: 0, imgUrl: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then(() => {
      setMessage('Product updated successfully!');
    });
  };

  return (
    <Container>
      <h1>Edit Product</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formProductName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formProductDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formProductQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formProductImgUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imgUrl"
            value={product.imgUrl}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      <Link to="/products" className="btn btn-secondary mt-3">Back to Product List</Link>
    </Container>
  );
}

export default ProductEdit;
