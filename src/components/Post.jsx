import posts from "../data/posts.js";
import Card from "../components/Card";
import { Navbar } from "react-bootstrap";

function Posts() {
     return (
          <div>
               <Navbar />
               {
               posts.forEach((post) => {
                    <Card 
                         image={posts.image}
                         title={posts.title}
                         content={posts.content}
                    />
               })
               }
          </div>
     );
}

export default Posts;