import React from "react";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

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
const inputsSetup = (placeholderText) => {
  const utils = renderTable();
  const input = screen.getByPlaceholderText(placeholderText);
  return {
    input,
    ...utils,
  };
};
// TEST INTIAL RENDER STATE
it("should show title", () => {
  renderApp();
  screen.getByRole("heading", { name: "Transactions" });
});

it("should show a table", () => {
  renderApp();
  screen.getByRole("table");
});

// TEST STATUS
it("should show a table with a column for status", () => {
  renderTable();
  const firstRow = screen.getAllByRole("row")[0];
  const statusCell = firstRow.children[0].textContent;
  expect(statusCell).toBe("Status");
});
it("should show transaction status when it is complete", () => {
  const completeTransaction = transactionsData.find(
    ({ status }) => status === "complete"
  );
  renderTable({ transactions: [completeTransaction] });
  const firstRow = screen.getAllByRole("row")[1];
  const statusCell = firstRow.children[0].textContent;
  expect(statusCell).toBe("complete");
});
it("should show transaction status when it is incomplete", () => {
  const incompleteTransaction = transactionsData.find(
    ({ status }) => status === "incomplete"
  );
  renderTable({ transactions: [incompleteTransaction] });
  const firstRow = screen.getAllByRole("row")[1];
  const statusCell = firstRow.children[0].textContent;
  expect(statusCell).toBe("incomplete");
});

// TEST BUTTON
it("search button should be disabled when there is no search term", () => {
  renderTable();
  const button = screen.getByRole("button", { name: /search/i });
  expect(button.disabled).toBe(true);
});
it("search button should be enabled when there is no search term", () => {
  renderTable();
  const input = screen.getByPlaceholderText("Search Transactions");
  fireEvent.change(input, { target: { value: "Enabled" } });
  const button = screen.getByRole("button", { name: /search/i });
  expect(button.disabled).toBe(false);
});

// TEST INPUT
it("should be able to type in the filter input", () => {
  const { input } = inputsSetup("Search Transactions");
  fireEvent.change(input, { target: { value: "mario" } });
  expect(input.value).toBe("mario");
});

// TEST FILTER
it("should be filter transaction table by team member", () => {
  renderTable();
  const input = screen.getByPlaceholderText("Search Transactions");
  fireEvent.change(input, { target: { value: "mario" } });
  expect(input.value).toBe("mario");
  const button = screen.getByRole("button", { name: /search/i });
  fireEvent.click(button);
  const firstRow = screen.getAllByRole("row")[1];
  const statusCell = firstRow.children[3].textContent;
  expect(statusCell).toBe("Mario Davis");
});
it("should be filter transaction table by merchant", () => {
  renderTable();
  const input = screen.getByPlaceholderText("Search Transactions");
  fireEvent.change(input, { target: { value: "facebook" } });

  const button = screen.getByRole("button", { name: /search/i });
  fireEvent.click(button);
  const firstRow = screen.getAllByRole("row")[1];
  const statusCell = firstRow.children[2].textContent;
  expect(statusCell).toBe("Facebook");
});
it("should be filter transaction table by gst & displayed as currency", () => {
  renderTable();
  const input = screen.getByPlaceholderText("Search Transactions");
  fireEvent.change(input, { target: { value: "453" } });
  const button = screen.getByRole("button", { name: /search/i });
  fireEvent.click(button);
  const firstRow = screen.getAllByRole("row")[1];
  const statusCell = firstRow.children[6].textContent;
  expect(statusCell).toBe("$453");
});
it("should be filter transaction table by amount & displayed as currency", () => {
  renderTable();
  const input = screen.getByPlaceholderText("Search Transactions");
  fireEvent.change(input, { target: { value: "7189" } });
  const button = screen.getByRole("button", { name: /search/i });
  fireEvent.click(button);
  const firstRow = screen.getAllByRole("row")[1];
  const statusCell = firstRow.children[5].textContent;
  expect(statusCell).toBe("$7189");
});
