import { useAppSelector } from "../../app/hooks";
import { ATTRIBUTES } from "../../features/filters/get-filters";
import "./product-filters.css";
import { isObjectEmpty } from "../../app/utility";

const ProductFilters = () => {
  const initialFilters = useAppSelector(
    (state) => state.filters.initialFilters
  );

  return (
    <aside className="product-filters">
      {ATTRIBUTES.map((attributeName) => (
        <div>
          <h2>{attributeName}</h2>
          <ul>
            {isObjectEmpty(initialFilters) &&
              initialFilters[attributeName].map((filterName) => (
                <li className="product-filter">
                  <input type="checkbox" />
                  {filterName}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};
export default ProductFilters;
