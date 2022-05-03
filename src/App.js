import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name: 'Andrew Cole', post: 'Does anyone else like tacos as much as I do?'}])

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  return (
    <div>
    <NavBar/>
    <div className='main-feed'>
      <CreatePost addNewPostProperty={addNewPost} />
    <div/>
     </div>
      </div>
  );
}
  
  


  export default App;