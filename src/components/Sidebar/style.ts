import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    background-color: ${colors.neutral[600]};
    width: 180px;
    height: 100vh;
    border-right: 1px solid ${colors.neutral[550]};
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 450ms;
`;
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.neutral[600]};
  height: 60px;
  border-bottom: 1px solid ${colors.neutral[550]};

`;

export const ContainerAvatar = styled.div`
    margin-right: 150px;
    display: flex;
    align-items: center;

    span{
      margin-left: 8px;
    }
`;

export const ContainerIcon = styled.div`
    margin-left: 185px;
    display: flex;
    align-items: center;
    transition: color 0.6s;
    &:hover{
      color: ${colors.brand["blue-300"]};
    }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  a {
    color: ${colors.neutral["white-400"]};
    margin-top: 30px;
    width: 100%;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &:hover,
    &:active {
      border-left: 3px solid ${colors.brand["blue-300"]};
      color: ${colors.brand["blue-300"]};
    }
  }
`;
