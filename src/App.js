import React from "react";
import Products from "./pages/Products";
import Cart from "./components/Cart/Cart.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorElement from "./pages/ErrorElement";
import WishList from "./pages/WishList";
import ProductDetails from "./pages/ProductDetails";
import Form from "./pages/Forms/Forms";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "art",
          element: <Products />,
        },
        {
          path: "art/:id",
          element: <ProductDetails/>,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "wishlist",
          element: <WishList />,
        },
        {
          path: "forms",
          element : <Form />
        }
      ],
      errorElement: <ErrorElement />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
