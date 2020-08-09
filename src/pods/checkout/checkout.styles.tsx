import styled from "@emotion/styled";

const classComponents = {
  MainContainer: styled("div")`
    min-width: max-content;
    max-width: 700px;
    height: max-content;
    margin: 0 auto;
    padding: 20px;
    font-family: "Open Sans", sans-serif;
    background-color: #fdfefe;
    border-radius: 5px;
    -webkit-box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
  `,
  FlexContainer: styled("div")`
    display: flex;
    width: 100%;
  `,
  H2: styled("h2")`
    margin: 0 0 20px 0;
    font-weight: 300;
  `,
  FlexInfoContainer: styled("div")`
    flex: 1;
    flex-direction: column;
    padding: 10px;
    &:first-of-type {
      margin-right: 20px;
    }
  `,
  TextInfo: styled("p")`
    margin: 0;
    padding: 0;
    color: #404040;
  `,
  List: styled("ul")`
    min-width: max-content;
    margin: 0;
    padding: 0;
  `,
  ListItem: styled("li")`
    color: #404040;
  `,
  Divider: styled("hr")`
    border-top: 1px solid #ccc;
  `,
  TextTotal: styled("p")`
    margin-bottom: 0px;
    text-align: right;
    font-size: 18px;
    color: #f54842;
  `,
  HiddenContainer: styled("div")`
    display: flex;
    justify-content: flex-end;
    min-width: max-content;
    max-width: 740px;
    height: max-content;
    margin: 0 auto;
    padding: 20px 0;
    font-family: "Open Sans", sans-serif;
  `,
  ButtonBack: styled("button")`
    display: inline-block;
    text-transform: uppercase;
    margin: 20px 0px 0px 20px;
    padding: 12px 40px;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #404040;
    outline: none;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      color: #fff;
      background-color: #404040;
      border: 2px solid #404040;
    }
    &:active {
      background-color: #ccc;
      border: 2px solid #ccc;
    }
  `,
  ButtonConfirm: styled("button")`
    display: inline-block;
    margin: 20px 0px 0px 20px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #404040;
    outline: none;
    cursor: pointer;
    padding: 12px 40px;
    border: 2px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      color: #fff;
      background-color: #20c073;
      border: 2px solid #20c073;
    }
    &:active {
      background-color: #ccc;
      border: 2px solid #ccc;
    }
  `,
};

export default classComponents;
