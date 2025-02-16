import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostsList } from "../../Store/Post-list-Store";
import PropTypes from 'prop-types';

const Post = ({post}) => {
  const { deletePost } = useContext(PostsList);

    return(
        <div className="card" style= {{width: "28rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={() => deletePost(post.id)}>
    <MdDelete />
    </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
      <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
    ))}
    <div className="alert alert-success reactions" role="alert">
       This Post has been reacted by {post.reactions} people.
</div>
  </div>
</div>
    )
}
Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    reactions: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};


export default Post;