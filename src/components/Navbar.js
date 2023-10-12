import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Main.css"

const Navbar = () => {
    return (
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default Navbar; 