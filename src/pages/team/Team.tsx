import React, { useContext, useLayoutEffect, useRef } from 'react'
import NavBar from '../../components/NavBar';
import TeamHeroImg from './components/CloudGroupHero';
import { ThemeContext } from "../../context/theme-context";
import Doodles from "../../assets/doodles.png";
import llamaImg from "../../assets/llama body.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './team.css';
import Footer from '../../components/Footer';


function Team() {

  const { theme, setTheme } = useContext(ThemeContext);
  


  return (
    <div className='team'>
      <NavBar/>
      <div className='team_landing'>
        <TeamHeroImg theme={theme}/>
          <div className='team_landing_head'>
            <h1>  behind the <br/>creation </h1> 
              <div className='team_landing_subhead'>
              <p>the powerful team behind <br/>manifesting this dream !</p>
            </div>
          </div>
      </div>
      <div className='team_developers'>
        <div className='team_developers_inner'>
          <h1>our developers</h1>
          <div className='team_developers_content'>
            <div className='team_developers_content_ppl'>
             <div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              </div>
              <div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              </div>
              <div>
              <div>
              
              </div>
              <div>
             
              </div>
             
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='team_designers'>
        <div className='team_designers_inner'>
          <h1>our designers</h1>
          <div className='team_designers_content'>
            <div className='team_designers_content_ppl'>
             <div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              </div>
              <div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              <div>
              
              </div>
              </div>
              <div>
              <div>
              
              </div>
              <div>
             
              </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
 
    </div>
  )
}

export default Team
