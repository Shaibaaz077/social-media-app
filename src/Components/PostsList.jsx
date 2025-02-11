import { useContext, useState } from "react";
import Posts from "./Posts";
import { PostsList as postListData} from "../../Store/Post-list-Store";

const PostList =  () => {
    const { postList, addInitialPosts} = useContext(postListData);
    const [dataFetched, setDataFetched] = useState(false);
    
    if(!dataFetched){
    fetch('https://dummyjson.com/posts')
     .then(res => res.json())
     .then((data) => {
        addInitialPosts(data.posts)
     });
     setDataFetched(true);
    }

    return(
        <div className="posted-container">
            {postList.map((post) => (
                <Posts key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default PostList;