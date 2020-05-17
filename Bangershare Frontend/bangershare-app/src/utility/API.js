import axios from "axios";
import { setAccessToken } from "../actions/User"

const baseURL = "https://bangersharebackend.azurewebsites.net/api/";

export const login = (username, password) => {
    return axios.post(baseURL + "User/login", {
        email: "",
        username: username,
        password: password,
    });
};

export const register = (email, username, password) => {
    return axios.post(baseURL + "User/register", {
        email,
        username,
        password,
    });
};

export const getUserFriends = (accessToken) => {
    return axios.get(baseURL + "Friend", {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    });
};

export const getUserPlaylists = (accessToken) => {
    return axios.get(baseURL + "Playlist", {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    });
}

export const postPlaylist = (accessToken, name) => {
    return axios.post(baseURL + "Playlist", {
        id: 0,
        name
    }, {
        headers: {
            Authorization: "Bearer " + accessToken,
        }
    });
}

export const refreshAccessToken = (user, callingFunction, failingFunction) => {
    return (dispatch) => {
        return axios
            .post(baseURL + "/User/refresh", {
                username: user.name,
                refreshToken: user.refreshToken,
            })
            .then((res) => {
                dispatch(setAccessToken(res))
                dispatch(callingFunction());
            })
            .catch((err) => {
                dispatch(failingFunction(err.message));
            });
    };
};

