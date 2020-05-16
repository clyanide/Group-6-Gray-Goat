import { actionType } from "../actions/User";
import { filter, mergeMap, catchError } from "rxjs/operators";
import axios from "axios";

const baseURL = "https://bangersharebackend.azurewebsites.net/api/User";
const rpc = axios.create({ baseURL: baseURL, proxy: false });

const getAccessToken = async (userInfo) => {
  return await rpc
    .post("/login", {
      email: "",
      username: userInfo.username,
      password: userInfo.password,
    })
    .then((res) => {
      return res.data.accessToken;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const registerUser = (action$, store) =>
  action$.pipe(
    filter((action) => action.type === actionType.REGISTER_USER),
    mergeMap(async (action) => {
      const userInfo = store.value.userReducer.userInfo;
      const response = await rpc
        .post("/register", {
          email: userInfo.email,
          username: userInfo.username,
          password: userInfo.password,
        })
        .then(async (res) => {
          if (res.status === 200) {
            return await getAccessToken(userInfo);
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
      return {
        type: actionType.REGISTER_USER_SUCCESS,
        username: userInfo.username,
        accessToken: response,
      };
    }),
    catchError((error) =>
      Promise.resolve({
        type: actionType.REGISTER_USER_FAIL,
        error: error.message,
      })
    )
  );

export const loginUser = (action$, store) =>
  action$.pipe(
    filter((action) => action.type === actionType.LOGIN_USER),
    mergeMap(async (action) => {
      const userInfo = store.value.userReducer.userInfo;
      const accessToken = await getAccessToken(userInfo);
      return {
        type: actionType.LOGIN_USER_SUCCESS,
        username: userInfo.username,
        accessToken,
      };
    }),
    catchError((error) =>
      Promise.resolve({
        type: actionType.LOGIN_USER_FAIL,
        error: error.message,
      })
    )
  );
