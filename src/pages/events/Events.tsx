import './Events.css';
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../events/components/card';
import { useState } from 'react';

function Events() {
    const [srcstr, setSrcStr] = useState('');
    let cardArray = [
        { header: 'is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
        { header: 'This is the header', desc: 'This is the description', domain: 'Domain' },
    ];
    const filteredCardArray = cardArray.filter((name) => {
        return name.header.toLowerCase().includes(srcstr);
    });
    return (
        <div id="eventsPage">
            <Navbar />
            <div id="eventsPageName">
                <h1 id="eventsHeader">Events</h1>
                <div className="eventsSearchBar">
                    <input
                        id="eventsSearchInput"
                        type="text"
                        placeholder="Search"
                        value={srcstr}
                        onChange={(e) => setSrcStr(e.target.value)}
                    />
                    <button id="eventsSearchClearButton" type="reset" onClick={() => setSrcStr('')}>
                        X
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div className="eventsContainer">
                    {filteredCardArray.map((name) => (
                        <Card vals={name} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
