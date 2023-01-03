import React from 'react';
import './card.css';
type oppurCardProps = {
    header: string;
    desc: string;
    domain: string;
    url?: string;
};
function Card(props: { vals: oppurCardProps }) {
    return (
        <div className="cardContainer">
            <h1 className="cardTittle">{props.vals.header}</h1>
            <p className="cardDesc">{props.vals.desc}</p>
            <div id="logo">
                <p
                    style={{
                        minWidth: '80px',
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: '#1A1A1A',
                        borderRadius: 20,
                        color: 'white',
                    }}
                >
                    {props.vals.domain}
                </p>
                <p style={{ padding: '10px', fontSize: 24, color: 'white' }}>
                    12000<span style={{ fontSize: 14 }}>/mo</span>
                </p>
            </div>
        </div>
    );
}

export default Card;
