import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name: 'Andrew Cole', post: 'Does anyone else like tacos as much as I do?'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  return (
    <div className='main-feed'>
      <CreatePost addNewPostProperty={addNewPost} />
      <div/>
      </div>
  );
}
  
  


  export default App;