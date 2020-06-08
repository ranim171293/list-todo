import styled from 'styled-components';

const LandingCss = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  width: 100%;
  margin: auto;
  .conatiner{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .paper{
    display: flex;
    padding: 30px 0px 0px;
    flex-direction: column;
  }
  .addBtn{
    padding-left: 30px;
  }
  .addBtnWrapper {
    width: 100%;
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid; 
  }
  .addedTaskWrapper{
    display: flex;
    padding: 15px 30px;
    font-size: 14px;
  }
`;


export default LandingCss;