import "./App.css";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Seller Panel</h1>
         <hr></hr>
        <Link to="/create-product">Create Product</Link>
        <br></br>
        <Link to="/products">Show All Products</Link>
      </div>
    ),
  },
  {
    path: "/create-product",
    element: <AddProduct />,
  },
  {
    path: "/products",
    element: <ProductList />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ProductList /> */}
    </>
  );
}

export default App;
