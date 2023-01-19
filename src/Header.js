import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

export default function Header({ title, children }) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                background: "#ccc",
                fontFamily: 'sans-serif',
                marginBottom: '24px'
            }}
        >
            <h1>{title}</h1>
            <Button onClick={onToggleTheme}>Mudar tema</Button>
            {children}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

Header.defaultProps = {
    title: `JStack's Blog`
}
