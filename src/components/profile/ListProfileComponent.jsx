import React, {Component} from 'react'
import moment from 'moment'
import HeaderComponent from "./HeaderComponent";

class ListProfileComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            profiles: this.props.location.state[0].profiles
        }
        this.openProfile = this.openProfile.bind(this)
    }

    // this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
    // this.updateTodoClicked = this.updateTodoClicked.bind(this)
    // this.addTodoClicked = this.addTodoClicked.bind(this)
    // this.refreshTodos = this.refreshTodos.bind(this)
    openProfile(profileId) {
        console.log("Inside Open Profile  " + profileId)
        this.props.history.push(`/viewprofile/${profileId}`)
    }

    render() {
        console.log('render')
        return (
            <div>
                <HeaderComponent/>
                <div className='page-title'>List Profiles</div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Display Name</th>
                            <th>Birthday</th>
                            <th>Gender</th>
                            <th>Religion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.profiles.map(
                                profile =>
                                    <tr key={profile.id} onClick={() => this.openProfile(profile.id)}>
                                        <td>{profile.displayName}</td>
                                        <td>{moment(profile.birthday).format('YYYY-MM-DD')}</td>
                                        <td>{profile.gender.toString()}</td>
                                        <td>{profile.religion.toString()}</td>
                                        {/*<td>
                                            <button className="btn btn-success"
                                                    onClick={() => this.updateTodoClicked(profile.id)}>Update
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                    onClick={() => this.deleteTodoClicked(profile.id)}>Delete
                                            </button>
                                        </td>*/}
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListProfileComponent