import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ProfileComponent from "./ProfileComponent";
import SearchProfileComponent from "./SearchProfileComponent";
import ListProfileComponent from "./ListProfileComponent";
import GlobalProfileComponent from "./GlobalProfileComponent";
import NewProfileComponent from "./newprofile/NewProfileComponent";
import SuccessComponent from "./newprofile/SuccessComponent";
import EditProfileComponent from "./newprofile/EditProfileComponent";
import HeaderComponent from "./HeaderComponent";

class ProfileApp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/create/profile/" component={NewProfileComponent}/>
                        <Route path="/create/success" component={SuccessComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/myprofile/:id" component={ProfileComponent}/>
                        <AuthenticatedRoute path="/edit/:id" component={EditProfileComponent}/>
                        <Route path="/search/profile" component={SearchProfileComponent}/>
                        <Route path="/viewprofiles" component={ListProfileComponent}/>
                        <Route path="/viewprofile/:profileId" component={GlobalProfileComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default ProfileApp