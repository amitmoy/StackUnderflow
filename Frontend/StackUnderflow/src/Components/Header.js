import logo from "../logo.svg"

function Header(){
    return(
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Questions</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header