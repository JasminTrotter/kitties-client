import React from 'react';
import EventCard from './EventCard';

export default class FilterByCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="Filter-by-city">
                <form className="filter-form">
                <select>
                    <option defaultValue value="Portland">Portland</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option  value="San Francisco">San Francisco</option>
                </select>
            </form>
            <EventCard />
            </div>
        );
    }
}
