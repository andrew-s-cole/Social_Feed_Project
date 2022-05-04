import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost'
import NavBar from './Components/NavBar/NavBar';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './App.css';


function App() {
  document.body.style.backgroundColor = 'lightblue'

  

  const [posts, setPosts] = useState([
    {name: 'Andrew Cole', post: 'Does anyone else like tacos as much as I do?'},
    {name: 'Leah Cole', post: 'Mhm, you know I love me some Taco Tuesday!'}])
    

  

  function addNewPost(post){
    let tempPosts = [...posts, post];

    setPosts(tempPosts)
  }

  return (
    <div>
      
    <NavBar/>
    <CreatePost className='border-box' addNewPostProperty={addNewPost} />
    <DisplayPosts parentPosts={posts} />
    </div>
    
    
  );
}
  
  


  export default App;