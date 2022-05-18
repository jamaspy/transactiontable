import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`;
const TableHead = styled.thead`
  background-color: #394281;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
`;

const TableBody = styled.tbody`
  background-color: #fff;
  font-weight: 300;
  font-size: 16px;
`;

const TableRow = styled.tr`
  border-bottom: 2px solid #eee;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const TableHeadCell = styled.th`
  text-align: left;
  padding: 10px;
`;

const TableBodyCell = styled.td`
  padding: 15px;
  text-transform: capitalize;
`;

const FilterWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #394281;
  border-radius: 4px 0 0 4px;
  border-right: none;
  margin-bottom: 10px;
`;
const Select = styled.select`
  padding: 2px;
  font-family: "Raleway", sans-serif;
  border: 1px solid #394281;
  border-radius: 4px;

  margin-right: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #394281;
  background-color: #394281;
  border-left: none;
  border-radius: 0 4px 4px 0;
  margin-bottom: 10px;
  cursor: pointer;
  color: #fff;
  outline: none;
  &:hover {
    background-color: #262c5e;
  }
  &:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: not-allowed;
  }
`;
const ClearButton = styled.button`
  padding: 10px;
  background-color: #30aedb;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #fff;
  outline: none;
  &:hover {
    background-color: #262c5e;
  }
`;
const DismissSpan = styled.span`
  cursor: pointer;
  color: #30aedb;
  &:hover {
    color: #262c5e;
  }
`;

export {
  Button,
  ClearButton,
  DismissSpan,
  FilterWrapper,
  Input,
  Select,
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
};
