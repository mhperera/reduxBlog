import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
      id: '1',
      title: 'Learning Redux Toolkit',
      content: "I've heard good things."
  },
  {
      id: '2',
      title: 'Slices...',
      content: "The more I say slice, the more I want pizza."
  }
]

const postsSlice = createSlice({
  name : 'posts',
  initialState,
  reducers:{
    postAdded:{
      // Using prepare callback to customize the action payload
      reducer: (state, action) => {
        state.push(action.payload)
      },
      // The prepare callback receives the original payload and returns an object
      prepare: (title, content) => {
        return {
          payload:{
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
    
  }
});

export default postsSlice.reducer;

export const { postAdded } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;