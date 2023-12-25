import Gdsclogocoloured from '../assets/gdsc_logo_coloured.png';
import Doodles from "../assets/doodles.png";
import FilledButton from './FilledButton';
import { FaEnvelope, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFigma } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="home_footer">
        <div className="home_footer_one">
            <div className="home_footer_one_img">
              <img src={Gdsclogocoloured} width={'270px'}/>
            </div>
            <div className="home_footer_links">
              <a href="mailto:dscmbcet@gmail.com"><FaEnvelope size={'1.2em'} /></a>
              <a href="https://instagram.com/gdscmbcet"><FaInstagram size={'1.2em'} /></a>
              <a href="https://x.com/gdscmbcet
"><FaTwitter size={'1.5em'} /></a>
              <a href="https://youtube.com/@DSCMBCET"><FaYoutube size={'1.2em'} /></a>
              <a href="https://www.linkedin.com/company/dsc-mbcet/
"><FaLinkedin size={'1.5em'} /></a>
              <a href="https://www.figma.com/community/tag/gdscmbcet"><FaFigma size={'1.2em'} /></a>
              <FilledButton
            fontSize="22px"
            text="Join us"
            bgColor="black"
            textColor="#FFF8E1"
            border={false}
            onClick={(e) => {e.preventDefault();window.location.href='https://gdsc.community.dev/mar-baselios-college-of-engineering-and-technology-thiruvananthapuram/'; }}
          />
            </div>
        </div>
        <div className="home_footer_two">
          <div className="home_footer_two_left">
              <h4> © 2023 GDSC MBCET</h4>
              <div>All Rights Reserved</div>
          </div>
          <div className="home_footer_two_right">
              <div>
                 <h4>About</h4>
                 <p>Who we are</p>
                 <p>Events</p>
                 <p>Team</p>
                 <p>Magazine</p>
                 <p>Community Guidelines</p>
              </div>
              <div className="home_footer_two_curations">
                 <h4>Curations</h4>
                 <p>Opportunities</p>
                 <p>Resources</p>
              </div>
          </div>
          
        </div>
      <div className="home_footer_image">
          <img src={Doodles}/>
        </div>
        
 
      </div>
      
    </div>
  )
}

export default Footer
