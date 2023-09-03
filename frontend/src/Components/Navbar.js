import logo from './../Images/logo.png';
import { Link } from 'react-router-dom';
import neu from './../Images/NEU.png';

function NavBar() {
  return (
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <img src={logo} className="imageLogo" />
        <img src={neu} className="imageNEU" />
      </Link>
    </div>
  );
}

export default NavBar;
