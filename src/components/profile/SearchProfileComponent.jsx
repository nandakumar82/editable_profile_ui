import React, {Component} from 'react'
import ProfileDataService from "../../api/profile/ProfileDataService.js";

class SearchProfileComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            profiles: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchClicked = this.searchClicked.bind(this)
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    searchClicked() {
        // console.log("Inside Search Clicked")
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
    }

    render() {
        return (
            <div>
                <title>Search Profile</title>
                <div>
                    <h1>Search Profile</h1>
                    <div className="container">
                        <hr/>
                        <div className="container">
                            <label htmlFor="uname"><strong>Username</strong></label>
                            <input type="text" placeholder="Enter DisplayName" name="displayName"
                                   onChange={this.handleChange} value={this.state.displayName} required/>

                        </div>
                        <button onClick={this.searchClicked}>Search</button>
                        <div>{this.state.dataNotFound}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchProfileComponent