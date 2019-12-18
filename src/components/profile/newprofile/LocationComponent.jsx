import React, {Component} from "react";

class LocationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {location: 'Select an option'}
    }

    handleOnChange = event => {
        this.props.getLocationState({location: event.target.value})
    };

    render() {
        return (<div className='form-group'>
            <label>Location <span className="required-field">*</span></label>
            <div>
                <select name="location" class="form-control" onChange={this.handleOnChange} value={this.props.state}>
                    <option value="">Select an option</option>
                    <option value="Aarhus">Aarhus</option>
                    <option value="Aberdeen">Female</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Acapulco">Acapulco</option>
                    <option value="Accra">Accra</option>
                    <option value="Adak">Adak</option>
                    <option value="Adamstown">Adamstown</option>
                    <option value="Adana">Adana</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Agadir">Agadir</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Zhengzhou">Zhengzhou</option>
                    <option value="Zaragoza">Zaragoza</option>
                    <option value="Zapopan">Zapopan</option>
                    <option value="Zanzibar City">Zanzibar City</option>
                    <option value="Zagreb">Zagreb</option>
                </select>
            </div>
        </div>)
    }
}

export default LocationComponent