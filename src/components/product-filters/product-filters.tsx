import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./product-filters.css";
import {
  addSelectedFilter,
  removeSelectedFilter,
} from "../../features/filters/filters-slice";
import React, { ChangeEvent, useState } from "react";
import FilterIcon from "./filter.icon";
import Button from "../button/button";

const ProductFilters = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const initialFilters = useAppSelector(
    (state) => state.filters.initialFilters
  );
  const attributes = Object.keys(initialFilters);
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
      <Button onClick={() => setFilterToggle(true)} classNames="filter-icon">
        <FilterIcon />
      </Button>
      <aside
        aria-label="product-filters"
        className={`product-filters ${
          filterToggle ? "product-filters--open" : "product-filters--close"
        }`}
      >
        <Button onClick={() => setFilterToggle(false)} classNames="filter-icon">
          X
        </Button>
        {attributes.map((attributeName) => (
          <div key={attributeName}>
            <h2>{attributeName}</h2>
            <ul>
              {initialFilters[attributeName].map((filterName: string) => (
                <li key={filterName}>
                  <label className="product-filter">
                    <input
                      type="checkbox"
                      name={filterName}
                      id={filterName}
                      onChange={(e) =>
                        handleFilterChange(e, filterName, attributeName)
                      }
                    />
                    {filterName}
                  </label>
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
