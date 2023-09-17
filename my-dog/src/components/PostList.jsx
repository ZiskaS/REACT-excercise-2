import React from 'react';
import Post from './Post'; 

function PostList({ searchValue }) {
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
        description: 'My sweatheart!',
        image: 'dog-2.jpg',
        comments: 5,
        likes: 10,
        },
  
        {
          author: 'Ana',
          date: new Date(), // Updated to use JavaScript Date object
          description: 'Best of the World!',
          image: 'dog-3.jpg',
          comments: 15,
          likes: 233,
          }
    ];
  
    // Function to filter posts based on the search query
    const filterPosts = (query) => {
    const lowercasedQuery = query.toLowerCase();
    return posts.filter((post) => {
      const lowercasedAuthor = post.author.toLowerCase();
      const lowercasedDescription = post.description.toLowerCase();
      // Check if the query appears in the author or description fields
      return (
        lowercasedAuthor.includes(lowercasedQuery) ||
        lowercasedDescription.includes(lowercasedQuery)
      );
    });
  };

  const filteredPosts = filterPosts(searchValue);

    return (
      <div className="container">
         {filteredPosts.map((post, index) => (
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
