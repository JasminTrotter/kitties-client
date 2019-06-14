import React from 'react';
import Select from 'react-select';

export default class FilterForm extends React.Component {
    render() {
        return (
                <div>
                    <form>
                       <Select
                            className="city-form-input"
                            value={this.props.city}
                            placeholder="Select a city..."
                            type="text"
                            name="city"
                            label="City"
                            options={[
                                { value: 'Portland', label: 'Portland' },
                                { value: 'LosAngeles', label: 'Los Angeles' },
                                { value: 'SanFrancisco', label: 'San Francisco' },                            
                            ]}
                            onChange={(value) => this.props.onCityChange(value)}
	             
	                    /> 
                    </form>
                </div>
        );
    }
}
