import React from 'react';
import '../../styles/EventCard.css';
import { Portland } from './eventCards';

export default function EventCard() {

    const html = Portland.map((card, i) => {
        return <div className="Event-card" key={i}>
                    <h2 className="who">{card.who}</h2>
                    <p className="what">{card.what}</p>
                    <p className="when">{card.when}</p>
                    <p className="where">{card.where}</p>
                    <a className="link" href={card.link}  target="_blank" rel="noopener noreferrer">{card.link}</a>
                </div>
    });

  return (
    <div className="Event-card-container">
        {html}
    </div>
    
  );
}