import React, { useContext } from 'react'
import NavBar from '../../components/NavBar'
import "./team.css";
import { ThemeContext } from '../../context/theme-context';
import Head from '../../assets/Head.png';
import Headtwo from '../../assets/Headtwo.png';
import Teamboxleads from './components/Teamboxleads';
import Teambox from './components/Teambox';


import VarshaRenjith from './components/images/varsharenjith.png';
import LiyaSusan from './components/images/liyasusan.png';
import Yoosuf from './components/images/yoosuf.png';
import Ritin from './components/images/ritingeorge.png';
import Aditya from './components/images/aditya.png';
import Gopal from './components/images/gopal.png';
import Sreelakshmi from './components/images/sreelakshmi .png';
import Ferwin from './components/images/ferwin.png';
import Jins from './components/images/jins.png';
import Mithun from './components/images/mithun.png';
import Vinu from './components/images/vinu.png';
import Ben from './components/images/ben.png';
import Sophy from './components/images/sophy.png';
import Sam from './components/images/sam.png';
import Aaron from './components/images/aaron.png';
import Litto from './components/images/litto.png';
import Joel from './components/images/joel.png';
import Noel from './components/images/noel.png';
import Nandana from './components/images/nandana.png';
import Rachana from './components/images/rachana.png';
import Teamleads2 from './components/Teamleads2';

function Team() {
  const { theme, setTheme } = useContext(ThemeContext);
  

  return (
    <div className='team'>
      <NavBar/>
      <div className='team_landing'>
        <div>
          <img src={Head } className='team_head'/>
          <h1>the team</h1>
          <p>the backbone of gdsc</p>
          <img src={Headtwo } className='team_headtwo'/>
          </div>
      </div>
      <div className='team_contents'>
         <Teamboxleads name='varsha renjith' position='GDSC MBCET lead'  border='none' backgroundColor='rgba(109, 185, 246, 1)' padding='0px' height='225px' img={VarshaRenjith} class='gdsclead' />
        <Teamboxleads backgroundColor='rgba(109, 185, 246, 1)' height='225px'  class='firstblock'/>
        <Teambox name='liya susan' position='web developer' border='rgba(229, 119, 119, 1) 2px solid' padding='0px' height='225px' img={LiyaSusan} width='290px'/>
        <Teamboxleads name='yoosuf mohammed' position='tech lead'  border='none' backgroundColor='rgba(229, 119, 119, 1)' padding='0px'  height='225px' img={Yoosuf} class='techlead' />
        <Teambox name='ritin george' position='web developer' border='rgba(229, 119, 119, 1) 2px solid' padding='0px' height='225px' img={Ritin}  width='288px'/>
        <Teambox name='aditya s' position='web developer' border='rgba(229, 119, 119, 1) 2px solid' padding='0px' height='225px' img={Aditya} />
        <Teambox name='gopal s' position='app developer' border='rgba(229, 119, 119, 1) 2px solid' padding='0px' height='225px' img={Gopal} />
        <Teamboxleads padding='30px' name='tech team' backgroundColor='rgba(229, 119, 119, 1)' height='225px'  class='techteam'/>
        <Teambox name='ferwin lopez' position='graphic designer' border='rgba(136, 203, 139, 1) 2px solid' padding='0px' height='225px' img={Ferwin} />
        <Teambox name='jins k' position='video editor' border='rgba(136, 203, 139, 1) 2px solid' padding='0px' height='225px' img={Jins} />
        <Teamleads2 name='r sreelakshmi' position='graphic design lead'  border='none' backgroundColor='rgba(136, 203, 139, 1)' padding='0px' height='225px' img={Sreelakshmi} class='designlead1'  />
        <Teamboxleads name='k s mithun' position='motion design lead'  border='none' backgroundColor='rgba(136, 203, 139, 1)' padding='0px' height='225px' img={Mithun} class='designlead2' />
        <Teambox name='vinu kurup' position='graphic designer' border='rgba(136, 203, 139, 1) 2px solid' padding='0px' height='225px' img={Vinu} />
        <Teamboxleads padding='30px' name='design team' backgroundColor='rgba(136, 203, 139, 1)' height='225px'   class='designteam'/>
        <Teamleads2 name='ben george' position='operations lead'  border='none' backgroundColor='rgba(220, 192, 101, 1)' padding='0px' height='225px' img={Ben} class='operationslead' />
        <Teambox name='sophy maria' position='community organizer' border='rgba(220, 192, 101, 1) 2px solid' padding='0px' height='225px' img={Sophy}  />
        <Teambox name='aaron k' position='community organizer' border='rgba(220, 192, 101, 1) 2px solid' padding='0px' height='225px' img={Aaron} />
        
        <Teamboxleads padding='30px' name='organizing team' backgroundColor='rgba(220, 192, 101, 1)' height='225px'  class='organizingteam'/>
        <Teambox name='sam peter' position='community organizer' border='rgba(220, 192, 101, 1) 2px solid' padding='0px' height='225px' img={Sam} />
        <Teamleads2 name='litto k lal' position='management lead'  border='none' backgroundColor='rgba(220, 192, 101, 1)' padding='0px' height='225px' img={Litto} class='organizinglead' />
        <Teambox name='joel lpe' position='content curator' border='rgba(115, 187, 246, 1) 2px solid' padding='0px' height='225px' img={Joel} />
        <Teamleads2 name='noel varughese' position='social lead'  border='none' backgroundColor='rgba(115, 187, 246, 1) ' padding='0px' height='225px'  img={Noel} class='sociallead'/>
        <Teambox name='nandana ts' position='content curator' border='rgba(115, 187, 246, 1) 2px solid' padding='0px' height='225px' img={Nandana} />
        <Teamboxleads padding='30px' name='social media team' backgroundColor='rgba(115, 187, 246, 1)' height='225px'  class='socialmediateam'/>
        <Teambox name='c rachana' position='content curator' border='rgba(115, 187, 246, 1) 2px solid' padding='0px' height='225px' img={Rachana} />
        <Teamboxleads padding='30px' backgroundColor='rgba(115, 187, 246, 1)' height='225px' class='secondblock'/>
      </div>
    </div>
  )
}

export default Team
