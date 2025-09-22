import React from "react";
import { useState } from "react";
const Post = (props) =>{
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return (
        <div style={{paddingRight:'15px', border:'1px solid black', marginBottom:'5px'}}>
            <div style={{marginTop:'15px'}}>{props.text}</div>
            <div style={{marginBottom:'10px'}}>
                <button onClick={() => setLike(like + 1)}>👍{like}</button>
                <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button>
            </div>
            
        </div>
    )
}
export default Post;