import React from "react";
import { Route } from "react-router-dom";
import Hot from "./Hot/Hot";
import Navbar from "../../components/Navbar/Navbar";
import News from "./News/News";
import Rising from "./Rising/Rising";
import Topbar from "../../components/Topbar/Topbar";

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
