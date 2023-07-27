import React, { useContext, useLayoutEffect, useRef } from 'react'
import NavBar from '../../components/NavBar';
import TeamHeroImg from '../creators/components/CloudGroupHero';
import { ThemeContext } from "../../context/theme-context";
import Doodles from "../../assets/doodles.png";
import llamaImg from "../../assets/llama body.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './creators.css';
import Footer from '../../components/Footer';
import Varsha from '../../assets/varsha.png'
import Curser from '../../assets/arrow.svg'
import CurserWhite from '../../assets/arrowwhite.svg'
import Sreelakshmi from '../../assets/sreelakshmi.png'
import Arrow from '../creators/components/Arrow';


function Creators() {

  const { theme, setTheme } = useContext(ThemeContext);
  let ImageToShow = '';
  
  if(theme=='dark'){
    ImageToShow=CurserWhite;
  }else{
    ImageToShow=Curser;
  }

  return (
    <div className='team'>
      <NavBar/>
      <div className='team_landing'>
        <div className='team_landing_cloud'>
        <TeamHeroImg theme={theme} />
        </div>
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
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              </div>
              <div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              </div>
              <div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='team_developers_images' src={Varsha} />
                  <div className='team_developers_name'>&lt;p&gt;Varsha&lt;/p&gt;</div>
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
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                  
                     <img className='team_designers_curser' src={ImageToShow}/>
                  
                   
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser'src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              </div>
              <div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              </div>
              <div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser'src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='team_designers_images' src={Sreelakshmi} />
                  <div className='team_designers_desc'>
                    <img className='team_designers_curser' src={ImageToShow}/>
                    <div className='team_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    
 
    </div>
  )
}

export default Creators
