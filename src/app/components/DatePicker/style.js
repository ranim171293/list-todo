import styled from 'styled-components';

const PickerCss = styled.section`
  .pickerInputH {
    margin-top: 15px;
    > p {
      color: gray12;
      font-size: 16px;
    }
    .pickerInput {
      display: flex;
      height: 48px;
      margin-top: 8px;
      border: 2px solid #e0e0e0;
      border-radius: 4px;
      &:focus-within {
        box-shadow: 0 0 9px 0 rgba(133, 219, 186, 0.42);
        // border: 2px solid green7;
      }
      input[type='text'] {
        flex: 1;
        border: 0 !important;
        padding-left: 14px;
        color: .black;
        cursor: pointer;
        &:focus {
          border: 0;
          box-shadow: none;
          caret-color: green;
        }
      }
      span {
        width: 48px;
        display: flex;
        justify-content:center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  .pickers {
    width: 100%;
    justify-content:center;
    align-items: center;
    cursor: pointer;
    > div {
      &:before {
        display: none;
      }
      &:after {
        display: none;
      }
      > input {
        font-size: 14px;
        padding: 0;
        background-color: white !important;
        padding: 0 5px;
      }
    }
  }
`;

export { PickerCss };