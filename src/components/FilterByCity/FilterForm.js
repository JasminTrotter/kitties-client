import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import DropdownFilter from './DropdownFilter';

export class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    render() {
        return (
                <div>
                    <form>
                       <Field
	                	className="city-form-input"
	                    component={DropdownFilter}
	                    type="text"
	                    name="city"
	                    label="City"
	                    onChange={(event) => this.setState({ city: event.target.value})}
	             
	                /> 
                    </form>
                </div>
        );
    }
}


export default reduxForm({
    form: 'filter-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('filter-form', Object.keys(errors)[0]))
})(FilterForm);