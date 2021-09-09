import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Api from "../services/api";

export default function Rising() {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadDataRising() {
      const data = await Api.get("/r/reactjs/rising.json")
        .then((response) => response.data.data)
        .then((response) => {
          console.log(response.children);
          setData(response.children);
        });
      return data;
    }
    loadDataRising();
  }, []);

  return <section>{!data ? <Loading /> : <Cards data={data} />}</section>;
}
