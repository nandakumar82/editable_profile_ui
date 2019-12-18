import React, {Component} from 'react'
import ProfileDataService from "../../api/profile/ProfileDataService";
import moment from "moment";

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: '',
            profilePicture: '',
            profileId: this.props.match.params.id
        };
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        ProfileDataService.retrieveProfile(this.props.match.params.id).then(response => {
            this.setState({profile: response.data});
            this.setState({profilePicture: response.data.profilePicture.data});
            console.log(response.data)
        }).catch(response => {
            console.log(response.data)
        })
    }

    onEdit() {
        this.props.history.push(`/edit/${this.state.profileId}`)
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h1>View your online profile</h1>
                        <fieldset>
                            <legend>
                                <h3>Personal Details</h3>
                            </legend>
                            <div className="user-profile">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='profile-pic'>
                                            <img src={`data:image/jpeg;base64,${this.state.profilePicture}`}
                                                 alt="Profile pic unavailable"/></div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'><label>Display Name</label>
                                            <div className='form-text'>{this.state.profile.displayName}</div>
                                        </div>
                                        <div className='form-group'>
                                            <label>Birthday</label>
                                            <div
                                                className='form-text'>{moment(this.state.profile.birthday).format('YYYY-MM-DD')}</div>
                                        </div>
                                        <div className='form-group'><label>Gender</label>
                                            <div className='form-text'>{this.state.profile.gender}</div>
                                        </div>
                                    </div>

                                    <div className='col-md-6 form-group'>
                                        <label>Ethnicity</label>
                                        <div className='form-text'>{this.state.profile.ethnicity}</div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label>Religion</label>
                                        <div className="gender">
                                            <div className='form-text'>{this.state.profile.religion}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label>Height</label>
                                        <div className="gender">
                                            <div className='form-text'>{this.state.profile.height}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label>Figure</label>
                                        <div className="gender">
                                            <div className='form-text'>{this.state.profile.figure}</div>

                                        </div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label>About Me</label>
                                        <div className="gender">
                                            <div className='form-text'>{this.state.profile.aboutMe}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <label>Location</label>
                                        <div className="gender">
                                            <div className='form-text'>{this.state.profile.location}</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success" onClick={this.onEdit}>Edit</button>
                            </div>
                        </fieldset>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileComponent