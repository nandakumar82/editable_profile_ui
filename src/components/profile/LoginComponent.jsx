import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
            errorMessage: '',
            profile: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    loginClicked() {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                let profile = response.data;
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.setState({profile: response.data});
                // console.log(this.state)
                this.props.history.push(`/welcome/${this.state.username}`, [this.state])
            }).catch((response) => {
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <div className="container">
                        <div className="form-group col-md-3">
                            {this.state.hasLoginFailed &&
                            <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Successful</div>}
                            User Name: <input type="text" name="username" value={this.state.username}
                                              onChange={this.handleChange} class="form-control"/>
                            Password: <input type="password" name="password" value={this.state.password}
                                             onChange={this.handleChange} class="form-control"/>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="btn btn-primary" onClick={this.loginClicked}>Login</button>
                    </div>
                </div>

            </div>

        )
    }
}

export default LoginComponent