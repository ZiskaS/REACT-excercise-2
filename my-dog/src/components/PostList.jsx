import React from 'react';
import Post from './Post'; 

function PostList() {
    const posts = [
      {
      author: 'Elisa',
      date: new Date(), // Updated to use JavaScript Date object
      description: 'I love my dog - so cute!',
      image: 'dog-1.jpg',
      comments: 22,
      likes: 99,
      },
  
      {
        author: 'Lucia',
        date: new Date(), // Updated to use JavaScript Date object
        description: 'I love my dog - so cute!',
        image: 'dog-2.jpg',
        comments: 5,
        likes: 10,
        },
  
        {
          author: 'Ana',
          date: new Date(), // Updated to use JavaScript Date object
          description: 'I love my dog - so cute!',
          image: 'dog-3.jpg',
          comments: 15,
          likes: 233,
          }
    ];
  
    return (
      <div className="container">
        {posts.map((post) => (
          <Post
            author={post.author}
            date={post.date}
            description={post.description}
            image={post.image}
            comments={post.comments}
            likes={post.likes}
          />
        ))}
      </div>
    );
  }
  
export default PostList;
