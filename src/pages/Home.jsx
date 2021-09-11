import React, { useContext } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import FilterInfo from "./FilterInfo";
import InfoReddit from "./InfoReddit";

export default function Home() {
  let { path, url } = useRouteMatch();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Topbar user={user} />
      <Navbar url={url} />
      <Switch>
        <Route exact path={path} component={InfoReddit} />
        <Route path={`${path}/:infoId`} component={FilterInfo} />
      </Switch>
    </div>
  );
}
