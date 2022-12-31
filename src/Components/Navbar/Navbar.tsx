import './Navbar.css';
import gdsclogo from './../../assets/images/gdsclogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <img src={gdsclogo} alt="logo" className="gdsclogo" />
            <ul className="navlinks">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    {' '}
                    <li className="navlink">About us</li>
                </Link>
                <Link to="/events" style={{ textDecoration: 'none' }}>
                    {' '}
                    <li className="navlink">Events</li>
                </Link>
                <Link to="/resources" style={{ textDecoration: 'none' }}>
                    {' '}
                    <li className="navlink">Resources</li>
                </Link>
                <Link to="/team" style={{ textDecoration: 'none' }}>
                    {' '}
                    <li className="navlink">Team</li>
                </Link>
                <Link to="/oppurtunities" style={{ textDecoration: 'none' }}>
                    {' '}
                    <li className="navlink">Opportunities</li>
                </Link>
                <Link to="/joinus">
                    <button className="btn">Join us</button>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
