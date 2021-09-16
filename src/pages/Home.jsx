import React, { useContext, useEffect, useState } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Loading from "../components/Loading";
import Cards from "../components/Cards";
import Api from "../services/api";
import moment from "moment";
import redditLogo from "../assets/images/reddit.png";
import Error from "../components/Error";

export default function Home() {
  const { user } = useContext(AuthContext);
  let { filter } = useParams();

  const [data, setData] = useState();
  const [after, setAfter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const redditUrl = filter ? `/r/reactjs/${filter}.json?limit=5` : `/r/reactjs.json?limit=5`

  const loadData = async () => {
    setLoading(true);
      await Api.get(redditUrl)
        .then((response) => response.data)
        .then((response) => {
          setAfter(response.data.after)
          setData(response.data.children);
        })
        .catch(error => {
          console.log(error)
          setError('Error on loading posts.')
        })
        .finally(() => 
        setLoading(false)
        )
  }

  const handleLoadMorePost = async () => {
    setLoading(true);
      await Api.get(redditUrl + `&after=${after}`)
      .then((response) => response.data)
      .then((response) => {
        setAfter(response.data.after)
        setData([...data,...response.data.children]);
      })
      .catch(error => {
        console.log(error)
        setError('Error on loading posts.')
      })
      .finally(() => 
      setLoading(false)
      )
  }


  // passar para o utils
  const linksArray = [
    {
      name: 'Hot',
      url: '/inforeddit/hot'
    },
    {
      name: 'New',
      url: '/inforeddit/new'
    },
    {
      name: 'Rising',
      url: '/inforeddit/rising'
    }
  ]

  const date = (utc) => {
    const data = new Date(utc * 1000);
    return moment(data).fromNow();
  };

  const formatPostData = (data) => data && data.map(post => {
    return {
      title: post.data.title,
      thumbnail: post.data.thumbnail.includes('https://') ? post.data.thumbnail : redditLogo,
      date: date(post.data.created_utc),
      author: post.data.author,
      url: post.data.url,
      id: post.data.name
    }
  })

  useEffect (() => {
    setError(null)
    loadData();
  }, [filter, redditUrl])

  if(error) return <Error errorMessage={error} buttonText={'Try again'} handleError={loadData}/>

  return (
    <div>
      <Topbar user={user} />
      <Navbar links={linksArray} />
      {loading && <Loading/>}
        <Cards data={formatPostData(data)}/>
        <div>
          <button onClick={() => handleLoadMorePost ()}>Ver Mais</button>
        </div>
    </div>
  );
}
