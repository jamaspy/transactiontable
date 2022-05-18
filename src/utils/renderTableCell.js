import React from "react";
import { categoryLookup } from "./categoryLookup";
import { formatDate } from "./formatDateString";
import { merchantLookup } from "./merchantLookup";
import categories from "../data/categories.json";
import { Select } from "../components/Table/styles";

// Temp handleChange fnc on checkbox to fix tests LINE17
export const renderTableCell = (value, type) => {
  switch (type) {
    case "receipt":
      return <input type="checkbox" readOnly checked={value} />;
    case "billable":
      return (
        <input
          type="checkbox"
          onChange={(e) => console.log(e)}
          checked={value}
        />
      );
    case "merchant":
      return merchantLookup(value).name;
    case "category":
      return (
        <Select>
          <option value={categoryLookup(value).name}>
            {categoryLookup(value).name}
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      );
    case "date":
      return formatDate(value);
    case "amount":
      return `$${value}`;
    case "gst":
      return `$${value}`;
    default:
      return `${value}`;
  }
};

// export const renderTableCell = (value, type) => {
//   switch (type) {
//     case "receipt":
//       return <input type="checkbox" checked={value} />;
//     case "billable":
//       return <input type="checkbox" checked={value} />;
//     case "merchant":
//       return merchantLookup(value).name;
//     case "category":
//       return categoryLookup(value).name;
//     case "date":
//       return formatDate(value);
//     case "amount":
//       return `$${value}`;
//     case "gst":
//       return `$${value}`;
//     default:
//       return `${value}`;
//   }
// };
