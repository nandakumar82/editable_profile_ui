import React, {Component} from 'react'
import ProfileDataService from "../../api/profile/ProfileDataService.js";

class SearchProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            profiles: '',
            dataNotFound: '',
            pleaseEnterDisplayName: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.searchClicked = this.searchClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({pleaseEnterDisplayName: ''});

        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    searchClicked() {
        // console.log("Inside Search Clicked")
        this.setState({pleaseEnterDisplayName: ''});

        if (this.state.displayName !== '') {
            ProfileDataService.retrieveAllProfiles(this.state.displayName)
                .then(response => {
                    console.log(response);
                    this.setState({profiles: response.data});
                    this.props.history.push(`/viewprofiles`, [this.state])
                }).catch(
                response => {
                    console.log(response);
                    this.setState({dataNotFound: response.response.data.message})
                }
            )
        } else {
            this.setState({pleaseEnterDisplayName: 'Please Enter the Display Name'})
        }

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Search Profile</h1>
                    <div className="container">
                        <hr/>
                        <div className="container">
                            <div className="form-group col-md-6">
                                <label htmlFor="text">Display Name:</label>
                                <input type="text" className="form-control" name="displayName"
                                       placeholder="Enter the Display Name" onChange={this.handleChange}
                                       value={this.state.displayName}/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.searchClicked}
                                style={{margin: '5px 30px'}}>Search
                        </button>
                        <div>{this.state.dataNotFound}</div>
                        <div>{this.state.pleaseEnterDisplayName}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchProfileComponent