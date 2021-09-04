import styled from "styled-components";
import { colors } from "../../styles/Colors";
import theme from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 30px 190px;
  grid-area: main;
  
  h2 {
    font-size: ${theme.fontSizes.h2};
  }
  span {
    font-size: ${theme.fontSizes.s};
  }

  
`;

export const Status = styled.div`
  width: 200px;
  height: 150px;
  margin-left: 20px;
  background: ${colors.brand["red-600"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 3.98477px 8.76649px 16.2444px rgba(0, 0, 0, 0.078963);
  border-radius: 4px;
`;
