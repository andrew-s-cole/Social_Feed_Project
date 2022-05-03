import React, { useState } from 'react';
import './CreatePost.css';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setpost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost)
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label style={{margin: '20px'}}>Name :</label>
            </div>
            <input type='text' className='name' value={name} onChange={(event) => setName(event.target.value)} />
            
            <div className='form-group'>
                <label style={{margin: '20px'}}>Post :</label>
            <input type='text' className='post' value={post} onChange={(event) => setpost(event.target.value)} />
            </div>

        <button type='submit' className='button'>Create</button>
                
        </form>
    );
}

export default CreatePost;