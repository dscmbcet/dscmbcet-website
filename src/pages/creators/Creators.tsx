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
import Cursor from '../../assets/arrow.svg'
import CursorWhite from '../../assets/arrowwhite.svg'
import Sreelakshmi from '../../assets/sreelakshmi.png'
import Arrow from '../creators/components/Arrow';
import Ritin from './components/images/ritin.png';
import Vinu from './components/images/vinu.png';
import Liya from './components/images/liya.png';

import Sreelakshmi2 from './components/images/sreelakshmi (2).png';
import Navaneeth from './components/images/navaneeth.png';
import Mithun from './components/images/mithun.png';
import Sera from './components/images/sera.png';
import Rhea from './components/images/rhea.png';
import Jomi from './components/images/jomi.png';
import Medlyn from './components/images/medlyn.png';
import Meenakshi from './components/images/meenakshi.png';
import Karthika from './components/images/karthika.png';
import Shibin from './components/images/shibin.png';
import Vlad from './components/images/vlad.png';
import Abhigail from './components/images/abhigayil.png';
import Amrutha from './components/images/amrutha.png';


function Creators() {

  const { theme, setTheme } = useContext(ThemeContext);
  let ImageToShow = '';
  
  if(theme=='dark'){
    ImageToShow=CursorWhite;
  }else{
    ImageToShow=Cursor;
  }

  return (
    <div className='creator'>
      <div className='creator_landing'>
        <div className='creator_landing_cloud'>
        <TeamHeroImg theme={theme} />
        </div>
          <div className='creator_landing_head'>
            <h1>  behind the <br/>creation </h1> 
              <div className='creator_landing_subhead'>
              <p>the powerful creator behind <br/>manifesting this dream !</p>
            </div>
          </div>
      </div>
      <div className='creator_developers'>
        <div className='creator_developers_inner'>
          <h1>our developers</h1>
          <div className='creator_developers_content'>
            <div className='creator_developers_content_ppl'>
             <div>
              <div>
                  <img className='creator_developers_images' src={Ritin} />
                  <div className='creator_developers_name'>&lt;p&gt;Ritin&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='creator_developers_images' src={Liya} />
                  <div className='creator_developers_name'>&lt;p&gt;Liya&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='creator_developers_images' src={Vinu} />
                  <div className='creator_developers_name'>&lt;p&gt;Vinu&lt;/p&gt;</div>
              </div>
              <div>
                  <img className='creator_developers_images' src={Varsha} />
                  <div className='creator_developers_name'>&lt;p&gt;Yoosuf&lt;/p&gt;</div>
              </div>
              </div>     
            </div>
          </div>
        </div>
        </div>
        <div className='creator_designers'>
        <div className='creator_designers_inner'>
          <h1>our designers</h1>
          <div className='creator_designers_content'>
            <div className='creator_designers_content_ppl'>
             <div>
              
              <div>
                  <img className='creator_designers_images' src={Varsha} />
                  <div className='creator_designers_desc'>
                  
                     <img className='creator_designers_cursor' src={ImageToShow}/>
                  
                   
                    <div className='creator_designers_name'>Varsha</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Navaneeth} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Navaneeth</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Mithun} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor'src={ImageToShow}/>
                    <div className='creator_designers_name'>Mithun</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Sreelakshmi2} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Sreelakshmi</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Sera} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Sera</div>
                  </div>
              </div>
              </div>
              <div>
              <div>
                  <img className='creator_designers_images' src={Rhea} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Rhea</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Jomi} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Jomi</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Medlyn} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Medlyn</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Meenakshi} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Meenakshy</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Karthika} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Karthika</div>
                  </div>
              </div>
              </div>
              <div className='creator_designers_row3'>
              
              <div>
                  <img className='creator_designers_images' src={Shibin} />
                  <div className='creator_designers_desc'>
                  
                     <img className='creator_designers_cursor' src={ImageToShow}/>
                  
                   
                    <div className='creator_designers_name'>Shibin</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Vlad} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Vlad</div>
                  </div>
              </div>
              
              <div>
                  <img className='creator_designers_images' src={Abhigail} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Abhigail</div>
                  </div>
              </div>
              <div>
                  <img className='creator_designers_images' src={Amrutha} />
                  <div className='creator_designers_desc'>
                    <img className='creator_designers_cursor' src={ImageToShow}/>
                    <div className='creator_designers_name'>Amrutha</div>
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
