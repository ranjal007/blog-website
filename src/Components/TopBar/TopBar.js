import React from "react";
import { Link, useHistory } from 'react-router-dom';
import './TopBar.css';


export default function TopNav() {
    return (
        <div className="top-nav">
            <div className="nav-left">
            <Link to="/" style={{textDecoration: 'none', color: "#ffffff"}}>BLOGWEB</Link>  
            </div>
            <div className="nav-right">
                <div className="text-center mt-2 nav-item">
                    <Link className="link-item" to='/'>Home</Link>
                </div>
                <div className="text-center mt-2 nav-item">
                    <Link className="link-item" to='/webniar'>Webniars</Link>
                </div>
                <div className="text-center mt-2 nav-item">
                    <Link className="link-item" to='/blog'>Blogs</Link>
                </div>
            </div>
        </div>
    )
}