import React, { useState } from 'react';


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
                <label>Name</label>
                <input type='text' className='name-box' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
            <label>Post</label>
            <input type='text' className='post-box' value={post} onChange={(event) => setpost(event.target.value)} />

        </div>

        <button type='submit' className='btn btn-primary'>Create</button>
                
        </form>
    );
}

export default CreatePost;