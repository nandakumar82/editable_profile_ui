import React, {Component} from "react";

class GenderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {gender: 'Select an option'}
    }

    handleOnChange = event => {
        this.props.getGenderState({gender: event.target.value})
    };

    render() {
        return (<div className='form-group'>
            <label>Gender <span className="required-field">*</span></label>
            <div>
                <select name="gender" className="form-control" onChange={this.handleOnChange} value={this.props.state}>
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>)
    }
}

export default GenderComponent