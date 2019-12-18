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
                <div className="container">
                    <div className="login-container">
                        <h3>Sign In</h3>
                        <div className="form-group">
                            {this.state.hasLoginFailed &&
                            <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Successful</div>}
                            <div>
                                <label>User Name:</label>
                                <input type="text" name="username" value={this.state.username}
                                       onChange={this.handleChange} class="form-control"/>
                            </div>
                            <div>
                                <label>Password:</label>
                            <input type="password" name="password" value={this.state.password}
                                             onChange={this.handleChange} class="form-control"/>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary btn-block" onClick={this.loginClicked}>Login</button>
                        </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default LoginComponent