import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

const PostsList = () => {

  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <div>
        <h1>Posts</h1>
        { renderedPosts }
    </div>
  )
}

export default PostsList
