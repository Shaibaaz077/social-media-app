import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostsList } from "../../Store/Post-list-Store";

const Post = ({post}) => {
  const { deletePost } = useContext(PostsList);

    return(
        <div className="card" style= {{width: "28rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={() => deletePost(post.id)}>
    <MdDelete />
    </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
      <span className="badge text-bg-primary hashtag">{tag}</span>
    ))}
    <div class="alert alert-success reactions" role="alert">
       This Post has been reacted by {post.reactions} people.
</div>
  </div>
</div>
    )
}

export default Post;