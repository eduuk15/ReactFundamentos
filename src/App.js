import React from "react";
import Header from "./Header";

import Post from './Post';

function App() {
    return (
        <>
            <Header title="JStack's Blog">
                <h2>Posts da semana</h2>
            </Header>

            <hr />

            <Post
                title="Título da notícia 1"
                subtitle="Subtítulo da notícia 1"
            />
            <Post
                title="Título da notícia 2"
                subtitle="Subtítulo da notícia 2"
            />
            <Post
                title="Título da notícia 3"
                subtitle="Subtítulo da notícia 3"
            />
            <Post
                title="Título da notícia 4"
                subtitle="Subtítulo da notícia 4"
            />
        </>
    );
}

export default App;
