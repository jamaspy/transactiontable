import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import transactions from "./data/transactions.json";
import headings from "./data/headings.json";
import categories from "./data/categories.json";
import merchants from "./data/merchants.json";
ReactDOM.render(
  <App
    transactions={transactions}
    headings={headings}
    categories={categories}
    merchants={merchants}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
