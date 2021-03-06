
import './Post.css';     
const Post = ({
  content,
  author
}) => {
  return (
    <div className="post-container">
      <img src="/blue-origami-bird.png" alt="" />
      <p className="post-description">
        {content}
      </p>
      <div>
        <span>
          <small>Author: {author}</small>
        </span>
      </div>
    </div>
  );
};

export default Post;