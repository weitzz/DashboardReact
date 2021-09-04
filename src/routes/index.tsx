import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../pages";
import Users from "../pages/users";
import GlobalStyle from "../styles/GlobalStyles";
import Sidebar from "../components/Sidebar";
const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Sidebar />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/assets" />
        <Route path="/units" />
        <Route path="/users" component={Users} exact />
        <Route path="/companies" />
      </Switch>
    </Router>
  );
};
export default Routes;
