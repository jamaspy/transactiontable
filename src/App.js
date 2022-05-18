import React from "react";
import styled from "styled-components";

import TransactionTable from "./components/Table";

const PageContainer = styled.div`
  max-width: 1200px;
  padding: 24px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: Raleway;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;
`;

const App = ({ headings, transactions, merchants, categories }) => (
  <PageContainer>
    <Title>Transactions</Title>
    <TransactionTable
      transactions={transactions}
      headings={headings}
      merchants={merchants}
      categories={categories}
    />
  </PageContainer>
);

export default App;
