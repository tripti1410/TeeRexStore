import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ATTRIBUTES } from "../../features/filters/get-filters";
import "./product-filters.css";
import { isObjectEmpty } from "../../app/utility";
import {
  addSelectedFilter,
  removeSelectedFilter,
} from "../../features/filters/filters-slice";
import React, { ChangeEvent, useState } from "react";
import FilterIcon from "./filter.icon";

const ProductFilters = () => {
  const [filterToggle, setFilterToggle] = useState(false);
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
    <React.Fragment>
      <button
        className="button filter-icon"
        onClick={() => setFilterToggle(true)}
      >
        <FilterIcon />
      </button>
      <aside
        className={`product-filters ${
          filterToggle ? "product-filters--open" : "product-filters--close"
        }`}
      >
        <button
          className="button filter-icon"
          onClick={() => setFilterToggle(false)}
        >
          X
        </button>
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
    </React.Fragment>
  );
};
export default ProductFilters;
