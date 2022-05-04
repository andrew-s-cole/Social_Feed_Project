import React from 'react';
import './DisplayPosts.css'
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return(
        <table className='display-post'>
            <tbody>
                {props.parentPosts.map((post, index) => {
                    return(
                        <tr key={index}>
                        <div className='post-name'>
                            <td>{post.name}</td>
                        <div className='post-post'>
                            <td>{post.post}</td>
                            <Post></Post>
                        </div>
                    </div>
                    </tr>
                    )
                    })}
            </tbody>
        </table>
    )
}

export default DisplayPosts;