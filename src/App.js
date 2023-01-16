import React from "react";
import Header from "./Header";

import Post from './Post';

function App() {
    return (
        <>
            <Header>
                <h2>Posts da semana</h2>
            </Header>

            <hr />

            <Post
                likes={20}
                post={{
                    title: "Título da notícia 1",
                    subtitle: "Subtítulo da notícia 1"
                }}
            />
            <Post
                likes={10}
                post={{
                    title: "Título da notícia 2",
                    subtitle: "Subtítulo da notícia 2"
                }}
            />
            <Post
                likes={50}
                post={{
                    title: "Título da notícia 3",
                    subtitle: "Subtítulo da notícia 3"
                }}
            />
            <Post
                likes={30}
                post={{
                    title: "Título da notícia 4",
                    subtitle: "Subtítulo da notícia 4"
                }}
            />
        </>
    );
}

export default App;
