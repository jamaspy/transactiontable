## Installation

1. Clone this repo to your machine
2. Run `npm install` to install the dependencies
3. Run `npm start` to run the app in development mode
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Introduction

### Thank you for the opportunity to take part in the challenge. Not having access to packages was fun! :) The table is rendering with the different data types, looking up the category & merchant names and is filtering against the required fields. More filter categories can be added in the future without having to change the filter function. And, more columns headings and data types can be added in the future without having to change the table itself.

## Test Notes

- Table data not being rendered at all in the table `<renderApp/>` is only producing the table, and the table head.
- Due to time contraints I was unable to get the table data to render. Tried, adding in a `async await`, `waitFor` & `findBy` in case the App was rendered before the table data was rendered by the `renderTableCell()` function.
- Really good example of using TDD from the beginning to ensure the appraoch is testable.

## Future Work

- Once table data is rendering add tests:
  - `<select>` & `<checkbox>` inputs are rendering correctly
  - Ensure the filter button is disabled when no filter term is entered
  - Ensure filter handles `numbers` and `strings`
- As the data and potential number of records increase the filter function will be less efficient and will need to be refactored.
- Allow data to be updated/added/deleted from the table

## Screenshots

<img width="1188" alt="Screen Shot 2022-05-19 at 9 08 47 am" src="https://user-images.githubusercontent.com/12505932/169169738-267bb7df-1e8b-4075-ba9f-6e22e5ad77cc.png">
<img width="1183" alt="Screen Shot 2022-05-19 at 9 09 03 am" src="https://user-images.githubusercontent.com/12505932/169169770-083b71ed-329c-4195-888e-5bcfe2b3498a.png">
<img width="1192" alt="Screen Shot 2022-05-19 at 9 09 22 am" src="https://user-images.githubusercontent.com/12505932/169169808-2a885540-7a00-4952-8808-21c9f043adb3.png">

