import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { store } from "../store"
import { push } from "connected-react-router";

const refreshAuthLogic = (failedRequest) => {
    axios.get("https://bangershareauth.azurewebsites.net/refresh_token?refresh_token=" + localStorage.getItem("spotifyRefreshToken"))
        .then((res) => {
            const access_token = res.data.access_token;
            localStorage.setItem("spotifyToken", access_token)
            failedRequest.config.headers["Authorization"] = "Bearer " + access_token
            return Promise.resolve;
        })
        .catch(() => {
            store.dispatch(push("/spotifyauth"))
        })
}

const spotifyClient = axios.create({})

createAuthRefreshInterceptor(spotifyClient, refreshAuthLogic);

export const playSong = (id, accessToken, uri) => {
    spotifyClient.put(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        uris: [uri]
    }, {
        headers: {
            Authorization: "Bearer " + accessToken,
        },
    })
}