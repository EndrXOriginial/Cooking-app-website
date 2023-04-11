import './navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='wrapper nav'>
                <img src='../assets/images/logo.svg' alt='Logo of the application' />
                <ul>
                    <li><a className='nav-link'>Home</a></li>
                    <li><a className='nav-link'>How it works</a></li>
                    <li><a className='nav-link'>About the app</a></li>
                    <li><a className='nav-link'>Download</a></li>
                </ul>
            </div>
        </nav>
    )
}