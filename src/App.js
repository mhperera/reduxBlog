import PostsList from "./feature/posts/PostsList";
import AddPostsForm from "./feature/posts/AddPostsForm";

function App() {
  return (
    <div className="App">
        <AddPostsForm />
        <PostsList />
    </div>
  );
}

export default App;
