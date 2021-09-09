import React, { useEffect, useState } from "react";
import Cards from "../../../components/Cards/Cards";
import Loading from "../../../components/Loading/Loading";
import Api from "../../../services/api";

export default function Hot() {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadDataHot() {
      const data = await Api.get("/r/reactjs/hot.json")
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
