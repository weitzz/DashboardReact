import {
  SidebarNav,
  ContainerLinks,
  Header,
  ContainerAvatar,
  ContainerIcon,
  ContainerLogo,
  Links,
} from './style';

import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import DashboardIcon from '@material-ui/icons/Dashboard';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from 'react';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSideBar = () => setSidebar(!sidebar);
  return (
    <>
      <Header>
        <ContainerIcon>
          <MenuIcon
            fontSize="large"
            to="/"
            style={{ cursor: 'pointer' }}
            onClick={showSideBar}
          />
        </ContainerIcon>
      </Header>
      <SidebarNav sidebar={sidebar}>
        <ContainerLogo>
          <h2>Dashboard</h2>
        </ContainerLogo>
        <ContainerAvatar>
          <AccountCircleIcon fontSize="large" />
          <span>Usuário One</span>
        </ContainerAvatar>
        <ContainerLinks>
          <Links to="/">
            <DashboardIcon />
            Dashboard
          </Links>
          <Links to="/users">
            <PeopleIcon />
            Usuários
          </Links>
          <Links to="/">
            <BusinessIcon />
            Empresas
          </Links>
        </ContainerLinks>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
