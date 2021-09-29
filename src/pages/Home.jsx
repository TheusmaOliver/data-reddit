import React from "react";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Loading from "../components/Loading";
import Cards from "../components/Cards";
import Error from "../components/Error";
import useRedditApi from "../hooks/useRedditApi";
import { formatPostData, linksArray } from "../utils/helpers";
import { useParams } from "react-router";

export default function Home() {
  let { filter } = useParams();
  const redditUrl = filter
    ? `https://www.reddit.com/r/reactjs/${filter}.json?limit=5`
    : `https://www.reddit.com/r/reactjs.json?limit=5`;

  const { loading, error, data, after, loadData, handleLoadMorePost } =
    useRedditApi(redditUrl);

  if (error)
    return (
      <Error
        errorMessage={error}
        buttonText={"Try again"}
        handleError={loadData}
      />
    );

  return (
    <div>
      <Topbar />
      <Navbar links={linksArray} />
      {loading && <Loading />}
      <Cards data={formatPostData(data)} />
      {after && (
        <div>
          <button onClick={() => handleLoadMorePost()}>Ver Mais</button>
        </div>
      )}
    </div>
  );
}
