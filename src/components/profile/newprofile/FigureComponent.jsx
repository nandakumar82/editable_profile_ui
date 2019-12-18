import React, {Component} from "react";

class FigureComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            figure: 'Select an option'
        }
    }

    handleOnChange = event => {
        this.props.getFigureState({figure: event.target.value})
    };

    render() {
        return (<div className='form-group'>
                <label>Figure</label>
                <div>
                    <select name="Figure" onChange={this.handleOnChange} value={this.props.state} class="form-control">
                        <option value="">Select an option</option>
                        <option value="Slim">Slim</option>
                        <option value="Normal">Normal</option>
                        <option value="Athletic">Athletic</option>
                        <option value="A few extra kilos">A few extra kilos</option>
                        <option value="More to love">More to love</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default FigureComponent