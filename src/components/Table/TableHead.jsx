import React from "react";
import { TableHead, TableHeadCell } from "./styles";

const Head = ({ headings }) => {
  return (
    <TableHead>
      <tr>
        {headings &&
          headings?.map((heading, index) => (
            <TableHeadCell key={`heading_${index}`}>
              {heading?.heading}
            </TableHeadCell>
          ))}
      </tr>
    </TableHead>
  );
};

export default Head;
