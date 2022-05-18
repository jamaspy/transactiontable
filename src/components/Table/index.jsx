import React, { useState } from "react";
import {
  Button,
  ClearButton,
  DismissSpan,
  FilterWrapper,
  Input,
  Table,
} from "./styles";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { merchantNameLookup } from "../../utils/merchantLookup";
import { categoryNameLookup } from "../../utils/categoryLookup";
const TransactionTable = ({
  transactions,
  headings,
  merchants,
  categories,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [hasResults, setHasResults] = useState(true);
  const [clearFilter, setClearFilter] = useState(false);

  // Setup Filter && Get ID for Merchant && Category Searches
  const merchnatsOptions = merchants?.map((merchant) =>
    merchant.name.toLowerCase()
  );
  const categoriesOptions = categories?.map((category) =>
    category.name.toLowerCase()
  );
  const filterOptions = ["budget", "team_member", "amount", "gst"];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterTransactions(searchTerm);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSearchTerm("");
    setFilteredTransactions(transactions);
    setHasResults(true);
    setClearFilter(false);
  };

  const handleResultActions = (r) => {
    if (r.length === 0) {
      setHasResults(false);
      setFilteredTransactions(transactions);
    } else {
      setHasResults(true);
      setClearFilter(true);
      setFilteredTransactions(r);
    }
  };

  const filterTransactions = (term) => {
    const prefilterArray = [...transactions];

    // Don't filter if the search term is empty
    // Button should be disabled if the search term is empty
    if (term === "") {
      return;
    }
    // Filter by Merchant
    if (merchnatsOptions.includes(term?.toLowerCase())) {
      const merchantID = merchantNameLookup(term?.toLowerCase());
      const results = transactions.filter(
        (t) => t["merchant"] === merchantID?.id
      );
      handleResultActions(results);
      return results;
    }

    // Filter by Category
    if (categoriesOptions.includes(term.toLowerCase())) {
      const categoryID = categoryNameLookup(term?.toLowerCase());
      const results = transactions.filter(
        (t) => t["category"] === categoryID?.id
      );
      handleResultActions(results);
      return results;
    }

    // Filter by rest of options
    const filterResults = prefilterArray.filter((transaction) => {
      return filterOptions.some((option) => {
        if (typeof transaction[option] === "number") {
          if (transaction[option].toString().includes(term)) {
            return true;
          }
        }
        if (typeof transaction[option] === "string") {
          if (transaction[option].toLowerCase().includes(term.toLowerCase())) {
            return true;
          }
        }
      });
    });

    handleResultActions(filterResults);
  };

  return (
    <>
      <FilterWrapper onSubmit={handleSubmit}>
        <Input
          placeholder="Search Transactions"
          onChange={(e) => handleChange(e)}
          value={searchTerm}
        />

        <Button
          type="submit"
          disabled={searchTerm.length === 0}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </FilterWrapper>
      {hasResults ? null : (
        <p style={{ marginBottom: "24px" }}>
          Nothing matches that search (sad face){" "}
          <DismissSpan role="button" onClick={handleReset}>
            [ Dismiss & Clear ]
          </DismissSpan>
        </p>
      )}
      {clearFilter && (
        <ClearButton onClick={handleReset}>Clear Filter</ClearButton>
      )}
      <Table>
        <TableHead headings={headings} />
        <TableBody transactions={filteredTransactions} headings={headings} />
      </Table>{" "}
    </>
  );
};

export default TransactionTable;
