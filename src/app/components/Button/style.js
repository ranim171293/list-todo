import styled from 'styled-components';

const ButtonStyle = styled.span`
  .primary{
    background: #1e68c5;
    color: #fff;
    font-weight: 500;
    &:hover {
      box-shadow: none;
      background-color: #1e68c5;
    }
  }
  .secondary{
    background: #e4e4e4;
    color: #756d6d;
    font-weight: 500;
    pointer-events: none;
    &[disabled] {
      opacity: 0.4;
    }

  }
  .tertriary {
    border: 1px solid #1e68c5;
    color: #1e68c5;
    border-radius: 4px;
    font-size: 10px;
    padding: 3px 8px;
    &[disabled] {
      opacity: 0.4;
    }
  }
  .disabled {
    background: #e4e4e4;
    color: #756d6d;
    font-weight: 500;
    pointer-events: none;
    opacity: 0.4;
  }
`;

export default ButtonStyle;