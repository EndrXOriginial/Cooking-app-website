import  './navbar.css';

export const Navbar = () => {
    return (
        <nav className='nav-bar'>
            <ul>
                <li><a>Home</a></li>
                <li><a>How it works</a></li>
                <li><a>About the app</a></li>
                <li><a>Download</a></li>
            </ul>
        </nav>
    )
}