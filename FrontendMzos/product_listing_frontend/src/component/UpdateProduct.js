import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = { name, description, price, quantity, imgUrl };
      await axios.put(`http://localhost:8080/products/${product.id}`, updatedProduct);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please check the console for details.');
    }
  };

  return (
    <div>
      <h2>Update Product</h2>
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
          <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} required />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
