import React, { useState } from "react";
import Header from "../Header";

import Post from '../Post';

import { ThemeProvider } from "../../context/ThemeContext";

import { Title } from './styles';

function App() {

    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Title1', subtitle: 'Sub1', likes: 20, read: false, removed: true },
        { id: Math.random(), title: 'Title2', subtitle: 'Sub2', likes: 40, read: true, removed: false },
        { id: Math.random(), title: 'Title3', subtitle: 'Sub3', likes: 50, read: false, removed: false  },
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
        setPosts((prevState) => prevState.map(
            post => (
                post.id === postId ? { ...post, removed: true } : post
            )
        ))
    }

    return (
        <ThemeProvider>
            <Header>
                <Title as="h2">
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </Title>
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
