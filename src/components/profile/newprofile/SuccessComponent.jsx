import React, {Component} from 'react'

class SuccessComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        return (
            <div className='container'>
                <div>
                    <h4>Your profile has been created successfully, please login to view or edit</h4>
                </div>
            </div>
        )
    }
}

export default SuccessComponent