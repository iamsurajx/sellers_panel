import { useState } from 'react';
const API = import.meta.env.VITE_API_URL;

const AddProduct = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    stockQuantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/create-product`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Product added successfully!');
      }
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" onChange={handleInputChange} className="border p-2 rounded" />
        <input type="text" name="description" placeholder="Description" onChange={handleInputChange} className="border p-2 rounded" />
        <input type="number" name="price" placeholder="Price" onChange={handleInputChange} className="border p-2 rounded" />
        <input type="text" name="category" placeholder="Category" onChange={handleInputChange} className="border p-2 rounded" />
        <input type="text" name="brand" placeholder="Brand" onChange={handleInputChange} className="border p-2 rounded" />
        <input type="number" name="stockQuantity" placeholder="Stock Quantity" onChange={handleInputChange} className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
