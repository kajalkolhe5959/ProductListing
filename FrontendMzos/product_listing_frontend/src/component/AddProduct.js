import React, { useState } from 'react';
import axios from 'axios';

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
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
