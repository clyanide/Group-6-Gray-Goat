import { actionType } from "../actions/User"
import { filter, mergeMap, catchError } from "rxjs/operators";
import axios from "axios";

const baseURL = "https://bangersharebackend.azurewebsites.net/api/User"
const rpc = axios.create({ baseURL: baseURL, proxy: false });

const getAccessToken = async (userInfo) => {
    return await rpc
        .post("/login", {
            email: "",
            username: userInfo.username,
            password: userInfo.password
        })
        .then((res) => {
            console.log("LOGIN RESPONSE")
            console.log(res._response)
            return res._response.accessToken
        }).catch(error => {
            throw new Error(error)
        })
}

export const registerUser = (action$, store) =>
    action$.pipe(
        filter((action) => action.type === actionType.REGISTER_USER),
        mergeMap(async (action) => {
            const userInfo = store.value.UserReducer.userInfo
            const response = await rpc
                .post("/register", {
                    email: userInfo.email,
                    username: userInfo.username,
                    password: userInfo.password
                })
                .then(async (res) => {
                    if (res.status === 200) {
                        console.log(res)
                        return await getAccessToken(userInfo);
                    }
                }).catch(error => {
                    throw new Error(error)
                })
            return { type: actionType.REGISTER_USER_SUCCESS, username: userInfo.username, accessToken: response.data.accessToken }
        }),
        catchError((error) => Promise.resolve({
            type: actionType.REGISTER_USER_FAIL,
            error: error.message
        }))
    );

export const loginUser = (action$, store) =>
    action$.pipe(
        filter((action) => action.type === actionType.LOGIN_USER),
        mergeMap(async (action) => {
            const userInfo = state.UserReducer.userInfo;
            const accessToken = await getAccessToken(userInfo)
            return { type: actionType.LOGIN_USER_SUCCESS, username: userInfo.username, accessToken }
        }),
        catchError((error) => Promise.resolve({
            type: actionType.LOGIN_USER_FAIL,
            error: error.message
        }))
    );
