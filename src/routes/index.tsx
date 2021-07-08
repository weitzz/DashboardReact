import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../pages";
import GlobalStyle from "../styles/GlobalStyles";

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/assets" />
        <Route path="/units" />
        <Route path="/users" />
        <Route path="/companies" />
      </Switch>
    </Router>
  );
};
export default Routes;
