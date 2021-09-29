const Card = ({ post }) => {

    return ( 
        <div className="card">
          <div className="card-image">
              <img src={post.thumbnail} alt="imagem do post" />
          </div>
          <div className="card-info">
            <h4 className="card-info__title">{post.title}</h4>
            <span className="card-info__data">
              sent {post.date} by
              <span> {post.author}</span>
            </span>
            <a href={post.url} target="blank" className="card-info__link">view post</a>
          </div>
        </div>
    );
}
 
export default Card;