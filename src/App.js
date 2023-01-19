import React, { useState } from "react";
import Header from "./Header";

import Post from './Post';

import { ThemeProvider } from "./ThemeContext";

import styles from './App.scss';

function App() {

    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Title1', subtitle: 'Sub1', likes: 20, read: false },
        { id: Math.random(), title: 'Title2', subtitle: 'Sub2', likes: 40, read: true },
        { id: Math.random(), title: 'Title3', subtitle: 'Sub3', likes: 50, read: false },
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title${prevState.length + 1}`,
                subtitle: `Sub${prevState.length + 1}`,
                read: false,
                likes: 50
            }
        ])
    }

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.filter(post => post.id !== postId))
    }

    return (
        <ThemeProvider>
            <Header>
                <h2 className={styles.title}>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    onRemove={handleRemovePost}
                />
            ))}
        </ThemeProvider>
    );
}

export default App;
