import React, {Component} from "react";

class ReligionComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            religion: 'Select an option'
        }
    }

    handleOnChange = event => {
        this.props.getReligionState({religion: event.target.value})
    };

    render() {
        return (<div>
            <label>Religion</label>
            <div>
                <select name="Religion" onChange={this.handleOnChange} value={this.props.state} className="form-control">
                    <option value="">Select an option</option>
                    <option value="Agnostic">Agnostic</option>
                    <option value="Atheist">Atheist</option>
                    <option value="Buddhist">Buddhist</option>
                    <option value="Christian">Christian</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Islam">Islam</option>
                    <option value="Jewish">Jewish</option>
                    <option value="Shinto">Shinto</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>)
    }
}

export default ReligionComponent