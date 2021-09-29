import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/inforeddit/:filter?" exact component={Home} />
    </Switch>
  );
};

export default Router;
