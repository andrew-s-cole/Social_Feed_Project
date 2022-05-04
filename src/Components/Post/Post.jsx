import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {
    const [like, setLike] = useState('unselected')
    const [dislike, setDislike] = useState('unselected')

    function clickLike() {
        if(like === 'unselected') {
            setLike('like-selected')
        }else{
            setLike('unselected')
        }
    }
    function clickDislike() {
        if(dislike === 'unselected') {
            setDislike('dislike-selected')
        }else{
            setDislike('unselected')
        }
    }
    return (
        <div>
        <button style={{margin: '5%'}} className={like} onClick={clickLike}>Like</button>
        <button className={dislike} onClick={clickDislike}>Dislike</button>
        </div>
    )
}

export default Post;