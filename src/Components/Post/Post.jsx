import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {
    const [like, setLike] = useState('unselected')
    const [dislike, setDislike] = useState('unselected')

    function clickLike() {
        if(like === 'unselected') {
            setLike('like-selected')

        }
    }
    function clickDislike() {
        if(dislike === 'unselected') {
            setDislike('dislike-selected')
        
        }
    }
    return (
        <div>
        <button className={like} onClick={clickLike}>Like</button>
        <button className={dislike} onClick={clickDislike}>Dislike</button>
        </div>
    )
}

export default Post;