import { useEffect, useState } from 'react';
import Postcard from '../Postcard/postCard'; 
import { fetchPosts } from './api';
import styles from './Home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Latest Posts</h1>
      <div className={styles.postsGrid}>
        {posts.map(post => (
          <postCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}