import React, {Component} from "react"
import GenderComponent from "./GenderComponent"
import EthnicityComponent from "./EthnicityComponent"
import ReligionComponent from "./ReligionComponent"
import FigureComponent from "./FigureComponent"
import MaritalStatusComponent from "./MaritalStatusComponent"
import ProfilePictureUploadComponent from "./ProfilePictureUploadComponent"
import ProfileDataService from "../../../api/profile/ProfileDataService"
import moment from "moment";
import LocationComponent from "./LocationComponent";


class EditProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                "displayName": "",
                "passPhrase": "",
                "realName": "",
                "birthday": "",
                "gender": "",
                "ethnicity": "",
                "religion": "",
                "height": "",
                "figure": "",
                "maritalStatus": "",
                "occupation": "",
                "aboutMe": "",
                "location": ""
            },
            isProfileCreated: false,
            isProfileFresh: true,
            profileId: '',
            profilePic: ''
        };

        this.getDisplayNameState = this.getDisplayNameState.bind(this);
        this.getPasswordState = this.getPasswordState.bind(this);
        this.getRealNameState = this.getRealNameState.bind(this);
        this.getProfilePicState = this.getProfilePicState.bind(this);
        this.getBirthdayState = this.getBirthdayState.bind(this);
        this.getGenderState = this.getGenderState.bind(this);
        this.getEthnicityState = this.getEthnicityState.bind(this);
        this.getReligionState = this.getReligionState.bind(this);
        this.getHeightState = this.getHeightState.bind(this);
        this.getFigureState = this.getFigureState.bind(this);
        this.getMaritalStatusState = this.getMaritalStatusState.bind(this);
        this.getOccupationState = this.getOccupationState.bind(this);
        this.getAboutMeState = this.getAboutMeState.bind(this);
        this.getLocationState = this.getLocationState.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        ProfileDataService.retrieveProfile(this.props.match.params.id).then(response => {

            let responseData = response.data;
            // let fileData = responseData.
            // 'data:image/jpeg;base64,' + btoa(responseData.profilePicture);
            this.setState({profile: responseData});
            let file = new File([responseData.profilePicture.data], "image.jpg", {
                type: "image/jpeg",
            });
            // this.setState({profilePic:'data:image/jpeg;base64,' + responseData.profilePicture.data})
            this.setState({profilePic: file});
            delete this.state.profile.profilePicture;

            console.log(responseData.data)
        }).catch(response => {
            console.log(response.data)
        })


    }


    getDisplayNameState(event) {
        let profile = this.state.profile;
        profile.displayName = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getPasswordState(event) {
        let profile = this.state.profile;
        profile.passPhrase = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getRealNameState(event) {
        let profile = this.state.profile;
        profile.realName = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getProfilePicState(state) {
        this.setState({profilePic: state})
    }

    getBirthdayState(event) {
        let profile = this.state.profile;
        profile.birthday = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getGenderState(state) {
        // console.log(state)
        let profile = this.state.profile;
        profile.gender = state.gender;
        this.setState({profile: profile})
    }

    getEthnicityState(state) {
        // console.log(state)
        let profile = this.state.profile;
        profile.ethnicity = state.ethnicity;
        this.setState({profile: profile})
    }

    getReligionState(state) {
        // console.log(state)
        let profile = this.state.profile;
        profile.religion = state.religion;
        this.setState({profile: profile})
    }

    getHeightState(event) {
        let profile = this.state.profile;
        profile.height = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getFigureState(state) {
        // console.log(state)
        let profile = this.state.profile;
        profile.figure = state.figure;
        this.setState({profile: profile})
    }

    getMaritalStatusState(state) {
        // console.log(state)
        let profile = this.state.profile;
        profile.maritalStatus = state.maritalStatus;
        this.setState({profile: profile})
    }

    getOccupationState(event) {
        let profile = this.state.profile;
        profile.occupation = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getAboutMeState(event) {
        let profile = this.state.profile;
        profile.aboutMe = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }

    getLocationState(event) {
        let profile = this.state.profile;
        profile.location = event.target.value;
        this.setState(
            {
                profile: profile
            }
        )
    }


    onSubmit() {
        console.log(this.state.profile);
        let profile = this.state.profile;
        if (profile.displayName !== '' && profile.realName !== '' && profile.birthday !== null && profile.gender !== '' && profile.maritalStatus !== '' && profile.location !== '') {
            delete profile.profilePicture;
            ProfileDataService.createProfile(profile, this.state.profilePic).then((response) => {
                    let data = response.data;
                    this.setState({
                        profile: data,
                        profileId: data.id,
                        isProfileCreated: true,
                        profilePic: data.profilePicture
                    });
                    console.log(response.data);
                    this.props.history.push("/create/success")
                }
            ).catch((response) => {
                console.log(response);
                this.setState({profilePicSizeExceeded: "Size of the image file has exceeded the allowed limits"})
            })
        } else {
            console.log("Fill in the mandatory details")
        }
    }

    render() {
        return (<div>
                <div className='page-title'>Edit your online profile</div>
                <div className="container">
                    <div>
                        <fieldset className="container row form-section">
                            <legend>
                                <h4>Account Details</h4>
                            </legend>
                            <div className="row">
                                <div className="col-sm-4"><label>Display Name <span className="required-field">*</span></label>
                                    <input
                                        className="form-control"
                                        type="text" name="displayName"
                                        /* placeholder="Enter Display Name"*/
                                        value={this.state.profile.displayName}
                                        onChange={this.getDisplayNameState}
                                        maxLength={256}/>
                                </div>
                                <div className="col-sm-4"><label>Password <span
                                    className="required-field">*</span></label><input
                                    className="form-control" type="password"
                                    name="Enter Password"
                                    value={this.state.profile.passPhrase}
                                    onChange={this.getPasswordState} maxLength={8}
                                />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="container row">
                            <legend>
                                <h4>Personal Details</h4>
                            </legend>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Real Name <span className="required-field">*</span></label>
                                    <input className="form-control"
                                           type="text" name="realName"
                                           value={this.state.profile.realName}
                                           onChange={this.getRealNameState}
                                           placeholder="Enter Real Name"
                                           maxLength={256}/>

                                    <div>{this.state.profilePicSizeExceeded}</div>
                                </div>
                                <div className="col-sm-6">
                                    <ProfilePictureUploadComponent
                                        getFileUploadState={this.getProfilePicState} state={this.state.profilePic}/>
                                </div>

                                <div className="col-sm-6"><label>Birthday <span
                                    className="required-field">*</span></label><input
                                    className="form-control" type="date"
                                    name="birthday"
                                    value={moment(this.state.profile.birthday).format('YYYY-MM-DD')}
                                    onChange={this.getBirthdayState}/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Height</label>
                                    <input className="form-control" type="number" name="height"
                                           value={this.state.profile.height} onChange={this.getHeightState}
                                           disabled={true}/>
                                </div>
                                <div className="col-sm-6">
                                    <GenderComponent getGenderState={this.getGenderState}
                                                     state={this.state.profile.gender}/>
                                </div>
                                <div className="col-sm-6">
                                    <EthnicityComponent getEthnicityState={this.getEthnicityState}
                                                        state={this.state.profile.ethnicity}/>
                                </div>
                                <div className="col-sm-6">
                                    <ReligionComponent getReligionState={this.getReligionState}
                                                       state={this.state.profile.religion}/>
                                </div>

                                <div className="col-sm-6">
                                    <FigureComponent getFigureState={this.getFigureState}
                                                     state={this.state.profile.figure}/>
                                </div>
                                <div className="col-sm-6">
                                    <MaritalStatusComponent
                                        getMaritalStatusState={this.getMaritalStatusState}
                                        state={this.state.profile.maritalStatus}/>
                                </div>
                                <div className="col-sm-6">
                                    <label>Occupation</label>
                                    <input type="text" className='form-control' value={this.state.profile.occupation}
                                           onChange={this.getOccupationState} maxLength={256}/>
                                </div>
                                <div className="col-sm-6">
                                    <label>About Me</label>
                                    <input type="text" className='form-control' value={this.state.profile.aboutMe}
                                           onChange={this.getAboutMeState}
                                           maxLength={5000}/>
                                </div>
                                <div className="col-sm-6">
                                    <LocationComponent getLocationState={this.getLocationState}
                                                       state={this.state.profile.location}/>
                                </div>
                            </div>
                        </fieldset>
                        <div>
                            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfileComponent