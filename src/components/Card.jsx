import redditLogo from "../assets/images/reddit.png";
import moment from "moment";

const Card = ({ post }) => {
  const date = (utc) => {
    const data = new Date(utc * 1000);
    return moment(data).fromNow();
  };
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={
            post.data.thumbnail.includes("https://")
              ? post.data.thumbnail
              : redditLogo
          }
          alt="imagem do post"
        />
      </div>
      <div className="card-info">
        <h4 className="card-info__title">{post.data.title}</h4>
        <span className="card-info__data">
          sent {date(post.data.created_utc)} by
          <span> {post.data.author}</span>
        </span>
        <a href={post.data.url} target="blank" className="card-info__link">
          view post
        </a>
      </div>
    </div>
  );
};

export default Card;
