import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Api from "../services/api";

export default function InfoReddit() {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadDataHot() {
      const data = await Api.get("/r/reactjs.json")
        .then((response) => response.data.data)
        .then((response) => {
          setData(response.children);
        });
      return data;
    }
    loadDataHot();
  }, []);

  return <section>{!data ? <Loading /> : <Cards data={data} />}</section>;
}
