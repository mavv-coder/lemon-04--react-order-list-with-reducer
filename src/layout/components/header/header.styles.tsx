import styled from "@emotion/styled";

const classComponents = {
  Container: styled("div")`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    min-width: max-content;
    max-width: 700px;
    height: 200px;
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
    margin-bottom: 40px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  `,
  InputField: styled("div")`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-right: 40px;
    &:last-of-type {
      margin-right: 0px;
    }
  `,
  Label: styled("label")`
    font-size: 17px;
    color: #404040;
  `,
  Input: styled("input")`
    height: 16px;
    margin-top: 10px;
    padding: 10px 12px;
    font-family: inherit;
    background-color: #fdfefe;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border: 2px solid #fddc5c;
    }
  `,
  InputReadOnly: styled("input")`
    width: 86px;
    height: 16px;
    margin-top: 10px;
    padding: 10px 12px;
    font-family: inherit;
    text-align: center;
    background-color: #fdfefe;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s;
  `,
  InputSuccess: styled("input")`
    height: 16px;
    margin-top: 10px;
    padding: 10px 12px;
    font-family: inherit;
    background-color: #fdfefe;
    border-radius: 5px;
    border: 2px solid #20c073;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border: 2px solid #fddc5c;
    }
  `,
  InputStateSuccess: styled("input")`
    width: 86px;
    height: 16px;
    margin-top: 10px;
    padding: 10px 12px;
    font-family: inherit;
    text-align: center;
    color: #20c073;
    background-color: #fdfefe;
    border: 2px solid #20c073;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border: 2px solid #fddc5c;
    }
  `,
  Button: styled("button")`
    display: inline-block;
    margin-left: auto;
    margin-top: auto;
    padding: 12px 40px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #404040;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #fddc5c;
    -webkit-box-shadow: 1px 2px 5px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 1px 2px 5px 1px rgba(119, 119, 119, 0.67);
    transition: all 0.2s;
    &:hover {
      color: #fff;
      background-color: #404040;
    }
    &:active {
      background-color: #ccc;
    }
  `,
};

export default classComponents;
