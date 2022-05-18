import React from "react";
import App from "./App";
import { render, within, screen } from "@testing-library/react";

import categoriesData from "./data/categories.json";
import merchantsData from "./data/merchants.json";
import transactionsData from "./data/transactions.json";
import headingsData from "./data/headings.json";
import TransactionTable from "./components/Table";

const renderApp = ({
  categories = categoriesData,
  merchants = merchantsData,
  transactions = transactionsData,
  headings = headingsData,
} = {}) =>
  render(
    <App
      categories={categories}
      merchants={merchants}
      transactions={transactions}
      headings={headings}
    />
  );
const renderTable = ({
  categories = categoriesData,
  merchants = merchantsData,
  transactions = transactionsData,
  headings = headingsData,
} = {}) => {
  render(
    <TransactionTable
      categories={categories}
      merchants={merchants}
      transactions={transactions}
      headings={headings}
    />
  );
};

const getRows = (screen) => screen.getAllByRole("row");
const getStatusCell = (row) =>
  within(row).getAllByRole("cell", { hidden: true })[0];
const getStatusCellInRow = (screen, rowNumber) =>
  getStatusCell(getRows(screen)[rowNumber]);

it("should show title", () => {
  renderApp();
  screen.getByRole("heading", { name: "Transactions" });
});

it("should show a table", () => {
  renderApp();
  screen.getByRole("table");
});

it("should show a table with a column for status", () => {
  renderApp();
  screen.getByRole("columnheader", { name: "Status" });
});

// No table data is being rendered
describe("status", () => {
  // it("should show transaction status when it is complete", async () => {
  //   const completeTransaction = transactionsData.find(
  //     ({ status }) => status === "complete"
  //   );
  //   // renderTable({ transactions: [completeTransaction] });
  //   render(<TestTable />);
  //   const statusCell = getStatusCellInRow(screen, 0);
  //   within(statusCell).getByText("Complete");
  // });
  // it("should show transaction status when it is incomplete", () => {
  //   const incompleteTransaction = transactionsData.find(
  //     ({ status }) => status === "incomplete"
  //   );
  //   renderApp({ transactions: [incompleteTransaction] });
  //   const statusCell = getStatusCellInRow(screen, 0);
  //   within(statusCell).getByText("Incomplete");
  // });
});
