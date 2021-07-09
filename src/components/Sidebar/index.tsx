import { SidebarNav,ContainerLinks,Header,ContainerAvatar,ContainerIcon,ContainerLogo}  from "./style";
import { NavLink} from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSideBar = () => setSidebar(!sidebar)
  return (
    <>
    <Header>
      <ContainerIcon>
      <MenuIcon fontSize='large' to="/" style={{cursor:"pointer"}} onClick={showSideBar}/>
      </ContainerIcon>
      <ContainerAvatar>
        <AccountCircleIcon fontSize='large'/>
        <span>Teste</span>
      </ContainerAvatar>
    </Header>
      <SidebarNav  sidebar={sidebar}>
        <ContainerLogo>
        <h2>Dashboard</h2>
        </ContainerLogo>
        <ContainerLinks>
           <NavLink to="/"><DashboardIcon />Dashboard</NavLink> 
            <NavLink to="/"><PeopleIcon/>Usuários</NavLink> 
            <NavLink to="/"><BusinessIcon />Empresas</NavLink> 
            <NavLink to="/"><TimelineIcon />...</NavLink> 
            </ContainerLinks>
       
      </SidebarNav>
    </>
  );
};

export default Sidebar;

