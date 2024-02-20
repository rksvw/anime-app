import React from "react";
import './Anime.css';

const Header = () => {
    return (
        <>
        <header id="main-header">
            <div className="left-head">
                <div className="logo">
                    <a href="#">
                        <h1>LOGO</h1>
                    </a>
                </div>
            </div>
            <nav className="right-head">
                <ul>
                    <li><a href="#" className="active">HOME</a></li>
                    <li><a href="#">FILTER</a></li>
                    <li><a href="#">MOVIE</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;