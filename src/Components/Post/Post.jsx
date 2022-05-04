import React, { useState } from 'react';
import './Post.css'

const Post = (props) => {
    const [like, setLike] = useState('inactive')
    const [dislike, setDislike] = useState('inactive')

    function clickLike() {
        if(like === 'inactive') {
            setLike('active')
        }else{
            setLike('inactive')
        }
    }
    function clickDislike() {
        if(dislike === 'inactive') {
            setDislike('active')
        }else{
            setDislike('inactive')
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