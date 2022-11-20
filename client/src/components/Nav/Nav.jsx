import './Nav.scss';

const Nav = () => {
  return (
    <nav>
        <div className="nav-section-left">
            <h1>Some Logo</h1>
        </div>
        <div className="nav-section-mid">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
        <div className="nav-section-right">
            <ul>
                <li><a href="/">Login/profile</a></li>
                <li><a href="/">Cart</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Nav