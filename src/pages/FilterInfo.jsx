import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Api from "../services/api";

export default function FilterInfo() {
  let { infoId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(async () => {
      const data = await Api.get(`/r/reactjs/${infoId}.json`)
        .then((response) => response.data.data)
        .then((response) => {
          setData(response.children);
          setLoading(false);
        });

      return data;
    }, 1000);

    return () => clearTimeout(timer);
  }, [infoId]);

  return <section>{loading ? <Loading /> : <Cards data={data} />}</section>;
}
