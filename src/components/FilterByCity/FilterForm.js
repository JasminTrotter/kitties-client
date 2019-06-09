import React from 'react';
import Select from 'react-select';
import { cityValue } from '../../actions/filter-by-city';
import { connect } from 'react-redux';

export class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: null
        }
    }

    onChange(value) {
        this.props.dispatch(cityValue(value));
    }

    render() {
        return (
                <div>
                    <form>
                       <Select
                            className="city-form-input"
                            value={this.props.selectedCity}
                            type="text"
                            name="city"
                            label="City"
                            options={[
                                { value: 'Portland', label: 'Portland' },
                                { value: 'Los Angeles', label: 'Los Angeles' },
                                { value: 'San Francisco', label: 'San Francisco' },                            
                            ]}
                            onChange={(value) => this.onChange(value)}
	             
	                    /> 
                    </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedCity: state.selectedCity
});

export default connect(mapStateToProps)(FilterForm);
