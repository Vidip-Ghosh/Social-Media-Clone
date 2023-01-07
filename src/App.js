import React from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Post from "./components/Post"

function App()
{
  return(
    <div>
      <Navbar/>
      <Feed/>
      <Post/>
    </div>
  );
}
export default App;