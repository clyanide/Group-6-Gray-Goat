import axios from "axios";

const baseURL = "https://bangersharebackend.azurewebsites.net/api/";

export const login = (username, password) => {
    return axios
        .post(baseURL + "User/login", {
            email: "",
            username: username,
            password: password,
        })
};

export const register = (email, username, password) => {
    return axios
        .post(baseURL + "User/register", {
            email,
            username,
            password
        })
};

export const getUserFriends = (accessToken) => {
    return axios
        .get(baseURL + "Friend", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
}

export const refreshAccessToken = (user, callingFunction, failingFunction) => {
    return (dispatch) => {
        return axios
            .post(baseURL + "/User/refresh", {
                username: user.name,
                accessToken: user.accessToken
            })(user)
            .then(() => {
                dispatch(callingFunction())
            })
            .catch(err => {
                dispatch(failingFunction(err.message))
            })
    }
}