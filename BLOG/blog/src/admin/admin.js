import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, deletePost } from "../services/api";

export default function Admin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);


  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

    return (
    <div className={styles.adminContainer}>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/create">➕ New Post</Link>
      {posts.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <h3>{post.title}</h3>
          <div>
            <Link to={`/admin/edit/${post.id}`}>✏️ Edit</Link>
            <button onClick={() => handleDelete(post.id)}>🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}