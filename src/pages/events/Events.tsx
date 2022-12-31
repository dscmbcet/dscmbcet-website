import './Events.css';
import Navbar from '../../Components/Navbar/Navbar';
import eventsheader from './../../assets/images/events.png';

function Events() {
    return (
        <div>
            <Navbar />
            <img src={eventsheader} alt="img" className="image1"></img>
        </div>
    );
}

export default Events;
