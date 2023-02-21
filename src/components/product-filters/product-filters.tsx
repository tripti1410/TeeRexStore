import "./product-filters.css";
const ProductFilters = () => {
  return (
    <aside className="product-filters">
      {[1, 2, 3].map(() => (
        <div>
          <h2>Color</h2>
          <ul>
            <li className="product-filter">
              <input type="checkbox" />
              abc
            </li>
            <li className="product-filter">
              <input type="checkbox" />
              abc
            </li>
            <li className="product-filter">
              <input type="checkbox" />
              abc
            </li>
          </ul>
        </div>
      ))}
    </aside>
  );
};
export default ProductFilters;
