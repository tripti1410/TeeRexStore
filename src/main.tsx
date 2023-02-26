import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/utility.css";
import "../src/assets/styles/index.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProductListing from "./pages/product-listing/product-listing";
import ShopingCart from "./pages/shooping-cart/shooping-cart";
import ErrorPage from "./pages/error";

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
    errorElement: (
      <BaseLayout>
        <ErrorPage />
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
    errorElement: (
      <BaseLayout>
        <ErrorPage />
      </BaseLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
