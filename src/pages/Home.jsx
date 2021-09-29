import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Loading from "../components/Loading";
import Cards from "../components/Cards";
import Error from "../components/Error";
import useRedditApi from "../hooks/useRedditApi";
import { formatPostData, linksArray, redditUrl } from "../utils/helpers";
import { useParams } from "react-router";

export default function Home() {
  let { filter } = useParams();

  const url = redditUrl(filter);

  const { loading, error, data, after, loadData, handleLoadMorePost } =
    useRedditApi(url);

  if (error)
    return (
      <Error
        errorMessage={error}
        buttonText={"Try again"}
        handleError={loadData}
      />
    );
  console.log(formatPostData(data));

  return (
    <div>
      <Topbar />
      <Navbar links={linksArray} />
      {loading && <Loading />}
      <Cards data={data} />
      {after && (
        <div>
          <button onClick={() => handleLoadMorePost()}>Ver Mais</button>
        </div>
      )}
    </div>
  );
}
