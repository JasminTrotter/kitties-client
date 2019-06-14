import React from 'react';
import EventCard from './EventCard';
import FilterForm from './FilterForm';

export default class FilterByCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: { label: 'Portland', value: 'Portland' }
        }
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(value) {
        this.setState({ city: { label: value.label, value: value.value }});
    }

    render() {

        return (
            <div className="Filter-by-city">
                <FilterForm onCityChange={this.onCityChange} city={this.state.city}/>
                <EventCard city={this.state.city} />
            </div>
        );
    }
}
