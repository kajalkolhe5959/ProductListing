import React from 'react';
import axios from 'axios';

const DeleteProduct = ({ productId }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/products/${productId}`);
      alert('Product deleted successfully!');
      window.location.reload(); // Refresh the page to reflect the deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please check the console for details.');
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Product</button>
    </div>
  );
};

export default DeleteProduct;
