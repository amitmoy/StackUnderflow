import logo from "../logo.svg"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react";

function Header(){
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState("");

    function handleSearchChange(event){
        setSearchKey(event.target.value);
    }

    return(
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo"></img>
                <ul className="nav-items">
                    <li>
                        <Link className="menu-button" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="menu-button" to="/topics">Questions</Link>
                    </li>
                    <li>
                        <Link className="menu-button" to="/new-question">Ask Question</Link>
                    </li>
                </ul>

                <div className="nav-search">
                    <div className="wrap">
                        <div className="search">
                            <input type="text" value={searchKey} onChange={handleSearchChange} className="search-term"/>
                            <button disabled={searchKey == ""} onClick={() => navigate('/search/'+searchKey)} className="search-button">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header