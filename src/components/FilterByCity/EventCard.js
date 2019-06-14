import React from 'react';
import '../../styles/EventCard.css';
import cityData from './eventCards.json';

export default class EventCard extends React.PureComponent {

  render() {
    const { city } = this.props;
    const cityMatch = cityData[city.value];

    let html = cityMatch.length === 0
      ? <div className="Event-card">There are no events listed for this city. Submit an event or check back later for updates!</div> 
      : cityMatch.map((card, i) => {
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
  
}
