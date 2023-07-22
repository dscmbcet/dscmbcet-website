import React from 'react'
import NavBar from '../../components/NavBar'
import EarthClouds from '../home/components/EarthClouds'
import EventComp from './components/EventComp'
import FilledButton from '../../components/FilledButton'
import './Events.css'
import { ThemeContext } from '../../context/theme-context'
import searchIcon from '../../assets/icons8-search-50.png'

function Events() {
    const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <NavBar/>
      <div className="Events_header">
        <EarthClouds theme={theme}/>
        Events
        <p className='Events_header_desc'>let's do cool things that matter</p>
      </div>
      <div className="events_section">
        <div className='events_searchbar'>
            <label htmlFor="" className='events_searchbar_label'>
                <img src={searchIcon} alt="icon" style={{scale: "50%"}}/>
            </label>
            <input type="text" placeholder='search'  className='events_searchbar_input'/>
            <button type='reset' className='events_searchbar_clear'>X</button>
        </div>
        <div className='events_filter'>
            <FilledButton text={"Join us"} textColor={theme === "dark" ? "black" : "white"} bgColor={theme === "dark" ? "var(--cream)" : "black" } border={false} fontSize="25px" id="joinUs"/>
            <FilledButton text={"Join us"} textColor={theme === "dark" ? "black" : "white"} bgColor={theme === "dark" ? "var(--cream)" : "black" } border={false} fontSize="25px" id="joinUs"/>
            <FilledButton text={"Join us"} textColor={theme === "dark" ? "black" : "white"} bgColor={theme === "dark" ? "var(--cream)" : "black" } border={false} fontSize="25px" id="joinUs"/>
            <FilledButton text={"Join us"} textColor={theme === "dark" ? "black" : "white"} bgColor={theme === "dark" ? "var(--cream)" : "black" } border={false} fontSize="25px" id="joinUs"/>
            <FilledButton text={"Join us"} textColor={theme === "dark" ? "black" : "white"} bgColor={theme === "dark" ? "var(--cream)" : "black" } border={false} fontSize="25px" id="joinUs"/>
            <FilledButton text={"Join us"} textColor={theme === "dark" ? "black" : "white"} bgColor={theme === "dark" ? "var(--cream)" : "black" } border={false} fontSize="25px" id="joinUs"/>
        </div>
        <div className="events_container">
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
            <EventComp theme={theme}/>
        </div>
      </div>
    </div>
  )
}

export default Events
