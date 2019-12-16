import React, {Component} from 'react'
import ProfileDataService from "../../api/profile/ProfileDataService";
import moment from "moment";

class GlobalProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            profilePicture: ''
        }
        this.backToSearch = this.backToSearch.bind(this)
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        ProfileDataService.retrieveProfile(this.props.match.params.profileId).then(response => {
            this.setState({profile: response.data});
            this.setState({profilePicture: response.data.profilePicture.data});

            console.log(response.data)
        }).catch(response => {
            console.log(response.data)
        })
    }

    backToSearch(){
        this.props.history.push("/search/profile")
    }

    render() {
        return (
            <div>
                <title>View Profile</title>
                <div className="container">
                    <div>
                        <h1>View profile</h1>
                        <fieldset>
                            <legend>
                                <h3>Personal Details</h3>
                            </legend>
                            <div className="personal-details">
                                <div>
                                    <div><label>Display Name</label>
                                        <div>{this.state.profile.displayName}</div>
                                    </div>
                                    <div><label>Profile Picture</label>
                                        <div><img src={`data:image/jpeg;base64,${this.state.profilePicture}`}/></div>
                                    </div>
                                    <div>
                                        <label>Birthday</label>
                                        <div>{moment(this.state.profile.birthday).format('YYYY-MM-DD')}</div>
                                    </div>
                                    <div><label>Gender</label><span>{this.state.profile.gender}</span></div>
                                </div>
                                <div>
                                    <div>
                                        <label>Ethnicity</label>
                                        <div className="gender">
                                            <div>{this.state.profile.ethnicity}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Religion</label>
                                        <div className="gender">
                                            <div>{this.state.profile.religion}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Height</label>
                                        <div className="gender">
                                            <div>{this.state.profile.height}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <label>Figure</label>
                                        <div className="gender">
                                            <div>{this.state.profile.figure}</div>

                                        </div>
                                    </div>
                                    <div>
                                        <label>About Me</label>
                                        <div className="gender">
                                            <div>{this.state.profile.aboutMe}</div>

                                        </div>
                                    </div>
                                    <div>
                                        <label>Location</label>
                                        <div className="gender">
                                            <div>{this.state.profile.location}</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <button className="btn btn-success" onClick={this.backToSearch}>Back to Search</button>

                    </div>
                </div>
            </div>
        )
    }
}

export default GlobalProfileComponent