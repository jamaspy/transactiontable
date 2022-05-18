import React from "react";
import { TableBody, TableBodyCell, TableRow } from "./styles";
import { renderTableCell } from "../../utils/renderTableCell";
const Body = ({ transactions, headings }) => {
  return (
    <TableBody>
      {transactions &&
        transactions?.map((t, index) => {
          return (
            <TableRow key={`tbr_${t.id + index}`} role="row">
              {headings &&
                headings?.map((h, index) => (
                  <TableBodyCell key={`tbc_${t.id + index}`} role="cell">
                    {renderTableCell(t[h.row], h.row)}
                  </TableBodyCell>
                ))}
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default Body;
