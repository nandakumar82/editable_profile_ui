import axios from 'axios'
import {API_URL} from '../../Constants'

class ProfileDataService {

    retrieveAllProfiles(displayName) {
        //console.log('executed service')
        return axios.get(`${API_URL}/view/allprofile/${displayName}`);
    }

    retrieveProfile(id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/view/profile/${id}`);
    }

    createProfile(profile, profilePicture) {
        //console.log('executed service')
        const formData = new FormData();
        formData.append('image', profilePicture);
        formData.append('profile', JSON.stringify(profile));

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log("Form data " + formData);
        return axios.post(`${API_URL}/create/profile`, formData, config);
    }
}

export default new ProfileDataService()