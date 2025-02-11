import { useContext, useRef } from "react";
import { PostsList } from "../../Store/Post-list-Store";

const CreatePost = () => {
  const { addPost } = useContext(PostsList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

const handleSbmit = (event) => {
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(' ');

  userIdElement.current.value = "";
  postTitleElement.current.value = "";
  postBodyElement.current.value = "";
  reactionsElement.current.value = "";
  tagsElement.current.value = "";



  addPost(userId, postTitle, postBody, reactions, tags)
}

    return( 
        <form onSubmit={handleSbmit}>
          <div style={{width:'450px', margin:'80px 0px 100px 200px'}}>

          <div className="mb-4">
    <label htmlFor="userId" className="form-label">Enter your user Id here</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User Id"/>
  </div>

  <div className="mb-4">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..."/>
  </div>

  <div className="mb-4">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" rows="4" ref={postBodyElement} className="form-control" id="body" placeholder="tell as more about it..."/>
  </div>

  <div className="mb-4">
    <label htmlFor="reactions" className="form-label">Number of reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this"/>
  </div>

  <div className="mb-4">
    <label htmlFor="tags" className="form-label">Enter your Hashtags Here</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="please enter your tags using space"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
   </div>
</form>
    )
}

export default CreatePost;