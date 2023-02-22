import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./reset.css";
import "./utility.css";
import "./index.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProductListing from "./pages/product-listing/product-listing";
import ShopingCart from "./pages/shooping-cart/shooping-cart";

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

const BaseLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <ProductListing />
      </BaseLayout>
    ),
  },
  {
    path: "/shopping-cart",
    element: (
      <BaseLayout>
        <ShopingCart />
      </BaseLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
