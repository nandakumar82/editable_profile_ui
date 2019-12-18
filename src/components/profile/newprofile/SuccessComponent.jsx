import React, {Component} from 'react'

class SuccessComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        return (
            <div>
                <title>Profile Created Successfully</title>
                <div>
                    <h3>Your profile has been created successfully, please login to view or edit</h3>
                </div>
            </div>
        )
    }
}

export default SuccessComponent