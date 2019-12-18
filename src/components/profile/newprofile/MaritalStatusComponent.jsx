import React, {Component} from "react";

class MaritalStatusComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maritalStatus: 'Select an option'
        }
    }

    handleOnChange = event => {
        this.props.getMaritalStatusState({maritalStatus: event.target.value})
    };

    render() {
        return (<div className='form-group'>
            <label>Marital Status <span className="required-field">*</span></label>
            <div>
                <select name="MaritalStatus" onChange={this.handleOnChange} value={this.props.state}
                        class="form-control">
                    <option value="">Select an option</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widower">Widower</option>
                    <option value="Separated">Separated</option>
                </select>
            </div>
        </div>)
    }
}

export default MaritalStatusComponent