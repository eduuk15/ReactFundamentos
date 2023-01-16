import React from "react";
import Header from "./Header";

import Post from './Post';

const posts = [
    { title: 'Title1', subtitle: 'Sub1', likes: 20 },
    { title: 'Title2', subtitle: 'Sub2', likes: 40 },
    { title: 'Title3', subtitle: 'Sub3', likes: 50 },
]

function App() {
    return (
        <>
            <Header>
                <h2>Posts da semana</h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    key={post.title}
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
