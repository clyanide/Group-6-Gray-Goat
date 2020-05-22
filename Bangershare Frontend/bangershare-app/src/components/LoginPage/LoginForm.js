import React, { useState } from "react";
import { TextField, InputAdornment, Button, Paper } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const LoginForm = (props) => {
  const { handleSignup, handleLogin, isSignUp, isFetching } = props;

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
  });

  const setUsername = (e) => {
    setUserInfo({
      ...userInfo,
      username: e.target.value,
    });
  };

  const setPassword = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
  };

  const setEmail = (e) => {
    setUserInfo({
      ...userInfo,
      email: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isSignUp) {
      handleSignup(userInfo);
    } else {
      handleLogin(userInfo);
    }
  };

  return (
    <form>
      {isSignUp ?
        <TextField
          variant="outlined"
          type="email"
          label="Email"
          value={userInfo.email}
          onChange={(e) => setEmail(e)}
          placeholder="eg. xyz@email.com"
          color="primary"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        :
        null
      }
      <TextField
        variant="outlined"
        label="Username"
        placeholder="Username"
        value={userInfo.username}
        onChange={(e) => setUsername(e)}
        color="primary"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <AccountCircleIcon />
            </InputAdornment>
          )
        }}
      />
      <TextField
        variant="outlined"
        label="Password"
        type="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={(e) => setPassword(e)}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <VpnKeyIcon />
            </InputAdornment>
          )
        }}
      />
      <Button variant="contained" color="primary" disabled={isFetching} onClick={() => handleSubmit()}>{isSignUp ? "Register" : "Login"}</Button>
    </form>
  );
};


export default LoginForm;
