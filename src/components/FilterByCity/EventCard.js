import React from 'react';
import '../../styles/EventCard.css';
import { Portland } from './eventCards';
import { connect } from 'react-redux';

export class EventCard extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(props, nextProps) {
    console.log('props', props);
    console.log('nextProps', nextProps);
  }
    
  render() {
    const html = Portland.map((card, i) => {
      return <div className="Event-card" key={i}>
                  <h2 className="who">{card.who}</h2>
                  <p className="what">{card.what}</p>
                  <p className="when">{card.when}</p>
                  <p className="where">{card.where}</p>
                  <a className="link" href={card.link}  target="_blank" rel="noopener noreferrer">{card.link}</a>
              </div>
    });
console.log(this.props);
    return (
    <div className="Event-card-container">
        {html}
    </div>
    
    );
  }
  
}

function mapStateToProps(state) {
  console.log(state);
  return {
    city: state.selectedCity
  }
};

export default connect(mapStateToProps)(EventCard);