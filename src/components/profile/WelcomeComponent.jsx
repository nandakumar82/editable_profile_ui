import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: ''
        };
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this)
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your profile <Link to={{
                    pathname: `/myProfile/${this.props.location.state[0].profile.id}`,
                    state: this.props.location.state[0]
                }}>here</Link> .
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>

            </>
        )
    }

    handleSuccessfulResponse(response) {
        console.log(response);
        this.setState({welcomeMessage: response.data.message})
    }

    handleError(error) {

        console.log(error.response);

        let errorMessage = '';

        if (error.message)
            errorMessage += error.message;

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }

        this.setState({welcomeMessage: errorMessage})
    }

}


export default WelcomeComponent