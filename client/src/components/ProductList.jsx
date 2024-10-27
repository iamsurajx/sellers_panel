import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const API = import.meta.env.VITE_API_URL;
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold">Product List</h2>
            <ul className="space-y-4">
                {products.map(product => (
                    <li key={product._id} className="border p-4 rounded">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Stock Quantity: {product.stockQuantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;