import React, {Component} from "react";

class EthnicityComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ethnicity: 'Select an option'
        }
    }

    handleOnChange = event => {
        this.props.getEthnicityState({ethnicity: event.target.value})
    };

    render() {
        return (<div>
            <label>Ethnicity</label>
            <div>
                <select name="ethnicity" className="form-control" onChange={this.handleOnChange} value={this.props.state}>
                    <option value="">Select an option</option>
                    <option value="White">White</option>
                    <option value="South Asian">South Asian</option>
                    <option value="South East Asian">South East Asian</option>
                    <option value="Mixed">Mixed</option>
                    <option value="Black">Black</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Hispanic">Hispanic</option>
                    <option value="Latino">Latino</option>
                    <option value="Native American">Native American</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>)
    }
}

export default EthnicityComponent