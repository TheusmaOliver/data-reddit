import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InfoReddit from "../pages/InfoReddit/InfoReddit";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={InfoReddit} />
      </Switch>
    </BrowserRouter>
  );
}
