import Navbar from '../../Components/Navbar/Navbar';
import './joinus.css';
import joinusheader from './../../assets/images/joinus.png';
import bg from './../../assets/images/bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Joinus() {
    return (
       //Main div
        <div className='main' style={{backgroundImage:`url(${bg})`}}>
        
            <Navbar />
            <img src={joinusheader} alt="img" className="image1"></img>
            
            <div className="centered">Join us</div>
              
          
            <div className='yt'>
                <div className='text'>
                    <h4>Find your zone, build your skills</h4>
                    <h6>Let’s grow together</h6>
                </div>
                <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/7o09af0BWiM" 
                title="YouTube video player" frameBorder="0" 
                data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            <button className='Join_button'><p className='button_text'>JOIN US</p></button>

            <div className='container'>
                <p>CONNECT WITH US</p>
                <div className='socials'>
                    <a href='https://twitter.com/gdscmbcet'>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href=''>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>

                    <a href=''>
                        <FontAwesomeIcon icon={faDiscord}/>
                    </a>

                    <a href=''>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>

                    <a href=''>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>

                    <a href=''>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </div>
        
        </div>
    );
}

export default Joinus;
