import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ATTRIBUTES } from "../../features/filters/get-filters";
import "./product-filters.css";
import { isObjectEmpty } from "../../app/utility";
import {
  addSelectedFilter,
  removeSelectedFilter,
} from "../../features/filters/filters-slice";

const ProductFilters = () => {
  const initialFilters = useAppSelector(
    (state) => state.filters.initialFilters
  );
  const dispatch = useAppDispatch();
  const handleFilterChange = (e, filterName, attributeName) => {
    if (e.target.checked) {
      dispatch(
        addSelectedFilter({
          filterName,
          attributeName,
        })
      );
    } else {
      dispatch(
        removeSelectedFilter({
          filterName,
          attributeName,
        })
      );
    }
  };

  return (
    <aside className="product-filters">
      {ATTRIBUTES.map((attributeName) => (
        <div key={attributeName}>
          <h2>{attributeName}</h2>
          <ul>
            {!isObjectEmpty(initialFilters) &&
              initialFilters[attributeName].map((filterName) => (
                <li className="product-filter" key={filterName}>
                  <input
                    type="checkbox"
                    name={filterName}
                    id={filterName}
                    onChange={(e) =>
                      handleFilterChange(e, filterName, attributeName)
                    }
                  />
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
