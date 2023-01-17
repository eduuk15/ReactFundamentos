import React, { useState } from "react";
import Header from "./Header";

import Post from './Post';

function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Title1', subtitle: 'Sub1', likes: 20 },
        { id: Math.random(), title: 'Title2', subtitle: 'Sub2', likes: 40 },
        { id: Math.random(), title: 'Title3', subtitle: 'Sub3', likes: 50 },
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title${prevState.length + 1}`,
                subtitle: `Sub${prevState.length + 1}`,
                likes: 50
            }
        ])
    }

    return (
        <>
            <Header>
                <h2>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    key={post.id}
                    post={{
                        title: post.title,
                        subtitle: post.subtitle
                    }}
                    likes={post.likes}
                />
            ))}
        </>
    );
}

export default App;
