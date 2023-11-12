import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';

const AddPostsForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);

  const handleSavePost = () => {
    if(title && content){
      dispatch(
        postAdded(title,content)
      );
      setTitle('');
      setContent('');
    }
  }

  return (
    <div>
      <h1>Add new Post Form</h1>
      <form>
        <label>Title</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChange}
        />
        <label>Content</label>
        <textarea
          type='text'
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button type='button' onClick={handleSavePost}>Save Post</button>
      </form>
    </div>
  )
}

export default AddPostsForm
