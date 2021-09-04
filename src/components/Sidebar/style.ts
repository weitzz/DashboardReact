import styled from "styled-components";
import { colors } from "../../styles/Colors";
import { NavLink } from "react-router-dom";
import theme from "../../styles";
export const SidebarNav = styled.div<{ sidebar: boolean }>`
  // background-color: ${colors.neutral[600]};
  width: 180px;
  height: 100vh;
  border-right: 1px solid ${colors.neutral[550]};
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 450ms;
  grid-area: sidebar;
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
  grid-area: header;
`;

export const ContainerAvatar = styled.div`
  border: 1px solid ${colors.neutral[550]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  height: 50px;
  transition: color 0.6s;
  cursor: pointer;
  span {
    margin-left: 8px;
    font-size: 0.9rem;
  }
  &:hover {
    color: ${colors.brand["blue-300"]};
  }
`;

export const ContainerIcon = styled.div`
  margin-left: 185px;
  display: flex;
  align-items: center;
  transition: color 0.6s;
  &:hover {
    color: ${colors.brand["blue-300"]};
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  height: 250px;
`;
export const Links = styled(NavLink)`
  color: ${colors.neutral["white-400"]};
  width: 98%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  transition: color 0.6s;

  &:hover,
  &:active {
    color: ${colors.brand["blue-300"]};
  }
`;
