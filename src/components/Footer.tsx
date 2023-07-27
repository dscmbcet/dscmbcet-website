import React from 'react'
import Gdsclogocoloured from '../assets/gdsc_logo_coloured.png';
import Mail from '../assets/mail.svg';
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";
import Linkedin from "../assets/linkedin.png";
import Figma from "../assets/figma.png";
import Doodles from "../assets/doodles.png";
import FilledButton from './FilledButton';
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="home_footer">
        <div className="home_footer_one">
            <div className="home_footer_one_img">
              <img src={Gdsclogocoloured}/>
            </div>
            <div className="home_footer_links">
              <a href=""><img src={Mail}/></a>
              <a href=""><img src={Instagram}/></a>
              <a href=""><img src={Twitter}/></a>
              <a href=""><img src={Youtube}/></a>
              <a href=""><img src={Linkedin}/></a>
              <a href=""><img src={Figma}/></a>
              <FilledButton
            fontSize="22px"
            text="Join us"
            bgColor="black"
            textColor="#FFF8E1"
            border={false}
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
                 <p>Community Guildlines</p>
              </div>
              <div className="home_footer_two_curations">
                 <h4>Curations</h4>
                 <p>Opportunities</p>
                 <p>Resources</p>
              </div>
          </div>
        </div>
      
        <div className="home_footer_img">
          <img src={Doodles}/>
        </div>
 
      </div>
    </div>
  )
}

export default Footer
