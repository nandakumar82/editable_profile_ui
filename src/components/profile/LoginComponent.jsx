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
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password, profile);

                this.setState({profile: response.data});
                // console.log(this.state)
                this.props.history.push(`/welcome/${this.state.username}`, [this.state])
            }).catch((response) => {
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
            // this.setState({errorMessage:response.response.data.model.message})
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent