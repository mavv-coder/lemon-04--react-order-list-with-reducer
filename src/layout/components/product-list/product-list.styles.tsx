import styled from "@emotion/styled";

const classComponents = {
  Container: styled("div")`
    display: flex;
    min-width: max-content;
    max-width: 740px;
    height: max-content;
    margin: 0 auto;
    padding: 20px 0;
    font-family: "Open Sans", sans-serif;
  `,
  Button: styled("button")`
    display: inline-block;
    margin: 20px 20px 10px 0;
    padding: 12px 40px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 400;
    color: #404040;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #ccc;

    transition: all 0.2s;
    &:hover {
      color: #fff;
      background-color: #20c073;
      border: 2px solid #20c073;
    }
    &:active {
      background-color: #404040;
      border: 2px solid #404040;
    }
    &:last-of-type:hover {
      background-color: #f54842;
      border: 2px solid #f54842;
    }
    &:last-of-type:active {
      background-color: #404040;
      border: 2px solid #404040;
    }
  `,
  Table: styled("table")`
    width: 740px;
    margin: 0 auto;
    font-family: "Open Sans", sans-serif;
    border-collapse: collapse;
    -webkit-box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
  `,
  TableData: styled("td")`
    padding: 8px;
    text-align: left;
    color: #404040;
    border-right: 2px solid #ccc;
    &:last-of-type {
      border-right: none;
    }
  `,
  TableHead: styled("th")`
    padding: 8px;
    text-align: left;
    font-weight: 400;
    color: #fdfefe;
    background-color: #404040;
    border-right: 2px solid #fdfefe;
    &:last-of-type {
      border-right: none;
    }
  `,
  TableRow: styled("tr")`
    &:nth-of-type(even) {
      background-color: #eee;
    }
  `,
  Input: styled("input")`
    padding: 3px;
    text-align: right;
    font-family: inherit;
    background-color: #fdfefe;
    border: 1px solid #ccc;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border: 1px solid #fddc5c;
    }
  `,
};

export default classComponents;
