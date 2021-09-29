import moment from "moment";
import redditLogo from "../assets/images/reddit.png";

const redditUrl = (filter) => {
  if (filter) return `https://www.reddit.com/r/reactjs/${filter}.json?limit=5`;

  return `https://www.reddit.com/r/reactjs.json?limit=5`;
};
// Função para converter UTC e data legivel
const date = (utc) => {
  const data = new Date(utc * 1000);
  return moment(data).fromNow();
};

// Deixando os dados legível para os componentes
const formatPostData = (data) =>
  data &&
  data.map((post) => {
    return {
      title: post.data.title,
      thumbnail: post.data.thumbnail.includes("https://")
        ? post.data.thumbnail
        : redditLogo,
      date: date(post.data.created_utc),
      author: post.data.author,
      url: post.data.url,
      id: post.data.name,
    };
  });

// Array com as rotas
const linksArray = [
  {
    name: "Hot",
    url: "/inforeddit/hot",
  },
  {
    name: "New",
    url: "/inforeddit/new",
  },
  {
    name: "Rising",
    url: "/inforeddit/rising",
  },
];

export { date, formatPostData, linksArray, redditUrl };
