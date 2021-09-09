import React, { useEffect, useState } from "react";
import Cards from "../../../components/Cards/Cards";
import Api from "../../../services/api";

export default function Hot() {
  const [data, setData] = useState();

  useEffect(() => {
    async function loadDataHot() {
      const data = await Api.get("/r/reactjs/hot.json")
        .then((response) => response.data.data)
        .then((response) => {
          console.log(response.children);
          setData(response.children);
        });
      return data;
    }
    loadDataHot();
  }, []);

  return (
    <section>{!data ? <div>carregando</div> : <Cards data={data} />}</section>
  );
}
