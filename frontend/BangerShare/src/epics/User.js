import { actionType } from "../actions/User"
import { filter, mergeMap, catchError } from "rxjs/operators";
import axios from "axios";

const baseURL = "https://bangersharebackend.azurewebsites.net/api/User"
const rpc = axios.create({ baseURL: baseURL, proxy: false });

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
                .then((res) => {
                    return res.data.username
                }).catch(error => {
                    throw new Error(error)
                })
            return { type: actionType.REGISTER_USER_SUCCESS, username: response }
        }),
        catchError((error) => Promise.resolve({
            type: actionType.REGISTER_USER_FAIL,
            error: error.message
        }))
    );
