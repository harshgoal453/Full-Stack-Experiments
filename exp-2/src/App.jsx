import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "./features/posts/postsSlice";
import { selectInstagramPosts } from "./selectors/postsSelector";

function App() {
  const dispatch = useDispatch();

  const posts = useSelector(selectInstagramPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Toolkit Experiment</h1>

      <h2>Instagram Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.platform}</p>
        </div>
      ))}
    </div>
  );
}

export default App;