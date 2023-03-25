import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ATTRIBUTES } from "../../features/filters/get-filters";
import "./product-filters.css";
import { isObjectEmpty } from "../../app/utility";
import {
  addSelectedFilter,
  removeSelectedFilter,
} from "../../features/filters/filters-slice";
import { ChangeEvent } from "react";

const ProductFilters = () => {
  const initialFilters = useAppSelector(
    (state) => state.filters.initialFilters
  );
  const dispatch = useAppDispatch();
  const handleFilterChange = (
    e: ChangeEvent<HTMLInputElement>,
    filterName: string,
    attributeName: string
  ) => {
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
              initialFilters[attributeName].map((filterName: string) => (
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
