import React, {Component} from 'react'
import ProfileDataService from "../../api/profile/ProfileDataService";
import moment from "moment";

class GlobalProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            profilePicture: ''
        };
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

    backToSearch() {
        this.props.history.push("/search/profile")
    }

    render() {
        return (
            <div>
                <title>View Profile</title>
                <div className='page-title'>View profile</div>
                <div className="container">
                    <div>

                        <fieldset>
                            <legend>
                                <h4>Personal Details</h4>
                            </legend>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className='profile-pic'>
                                        <div className='form-text'><img
                                            src={`data:image/jpeg;base64,${this.state.profilePicture}`}/></div>
                                    </div>
                                </div>
                                <div className="col-sm-6">

                                    <div className='form-group'><label>Display Name</label>
                                        <div className='form-text'>{this.state.profile.displayName}</div>
                                    </div>

                                    <div className='form-group'>
                                        <label>Birthday</label>
                                        <div>{moment(this.state.profile.birthday).format('YYYY-MM-DD')}</div>
                                    </div>
                                    <div className='form-group'><label>Gender</label>
                                        <div className='form-text'>{this.state.profile.gender}</div>
                                    </div>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Ethnicity</label>
                                    <div className="gender">
                                        <div className='form-text'>{this.state.profile.ethnicity}</div>
                                    </div>
                                </div>
                                <div className="col-sm-6 form-group ">
                                    <label>Religion</label>
                                    <div className="gender">
                                        <div className='form-text'>{this.state.profile.religion}</div>
                                    </div>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Height</label>
                                    <div className="gender">
                                        <div>{this.state.profile.height}</div>
                                    </div>
                                </div>

                                <div className="col-sm-6 form-group">
                                    <label>Figure</label>
                                    <div className="gender">
                                        <div className='form-text'>{this.state.profile.figure}</div>

                                    </div>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>About Me</label>
                                    <div className="gender">
                                        <div className='form-text'>{this.state.profile.aboutMe}</div>

                                    </div>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <label>Location</label>
                                    <div className='form-text'>{this.state.profile.location}</div>
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

export default GlobalProfileComponent;