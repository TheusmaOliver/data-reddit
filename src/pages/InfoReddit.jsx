import React from "react";
import { Route } from "react-router-dom";
import Hot from "./Hot";
import Navbar from "../components/Navbar";
import News from "./News";
import Rising from "./Rising";
import Topbar from "../components/Topbar";

export default function InfoReddit() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="content">
        <Route path="/hot" component={Hot} />
        <Route path="/news" component={News} />
        <Route path="/rising" component={Rising} />
      </div>
    </div>
  );
}
