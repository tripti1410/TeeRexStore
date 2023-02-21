import "./App.css";
import Header from "./components/header/header";
import ProductCard from "./components/product-card/product-card";
import ProductFilters from "./components/product-filters/product-filters";
import ProductsSearch from "./components/products-search/products-search";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="product-page">
          <ProductsSearch />
          <ProductFilters />
          <section className="product-listing">
            {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
              <ProductCard />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
