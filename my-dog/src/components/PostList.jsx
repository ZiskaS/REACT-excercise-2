import React, { useState, useEffect } from 'react';
import Post from './Post';

function PostList({ searchValue }) {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Define the 'posts' array inside the useEffect callback
    const posts = [
      {
        author: 'Elisa',
        date: new Date(),
        description: 'I love my dog - so cute!',
        image: 'dog-1.jpg',
        comments: 22,
        likes: 99,
      },
      {
        author: 'Lucia',
        date: new Date(),
        description: 'She is so sweet!',
        image: 'dog-2.jpg',
        comments: 5,
        likes: 10,
      },
      {
        author: 'Ana',
        date: new Date(),
        description: 'I adore my furry friend!',
        image: 'dog-3.jpg',
        comments: 15,
        likes: 233,
      },
    ];

    const filterPosts = (query) => {
      const lowercasedQuery = query.toLowerCase();
      return posts.filter((post) => {
        const lowercasedAuthor = post.author.toLowerCase();
        const lowercasedDescription = post.description.toLowerCase();
        return (
          lowercasedAuthor.includes(lowercasedQuery) ||
          lowercasedDescription.includes(lowercasedQuery)
        );
      });
    };

    const timer = setTimeout(() => {
      const filtered = filterPosts(searchValue);
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredPosts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            date={post.date}
            description={post.description}
            image={post.image}
            comments={post.comments}
            likes={post.likes}
          />
        ))
      )}
    </div>
  );
}

export default PostList;

