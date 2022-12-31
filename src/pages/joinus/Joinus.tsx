import Navbar from '../../Components/Navbar/Navbar';
import './joinus.css';
import joinusheader from './../../assets/images/joinus.png';

function Joinus() {
    return (
        <div>
            <Navbar />
            <img src={joinusheader} alt="img" className="image1"></img>
        </div>
    );
}

export default Joinus;
