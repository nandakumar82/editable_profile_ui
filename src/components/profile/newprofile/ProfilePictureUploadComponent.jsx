import React, {Component} from "react";
import "./file.css"

class ProfilePictureUploadComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: ''
        }
    }


    onChangeHandler = event => {
        console.log(event.target.files[0]);
        this.props.getFileUploadState(event.target.files[0])
    };


    render() {
        return (
            <div className="col-sm-4">
                <div className="row">
                    <label>Upload Your Picture </label>
                    <input type="file" name="profilePicture" accept="image/*"
                           onChange={this.onChangeHandler}/>
                </div>
            </div>
        )
    }
}

export default ProfilePictureUploadComponent