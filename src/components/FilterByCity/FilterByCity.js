import React from 'react';
import EventCard from './EventCard';
import FilterForm from './FilterForm';

export default class FilterByCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Filter-by-city">
                <FilterForm />
                <EventCard />
            </div>
        );
    }
}
