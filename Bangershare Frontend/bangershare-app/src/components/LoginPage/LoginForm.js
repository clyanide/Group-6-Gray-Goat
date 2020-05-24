import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginForm = (props) => {
  const { handleSignup, handleLogin, isSignUp, isFetching, error } = props;

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

  const onEnter = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div
      onKeyDown={(e) => onEnter(e)}
      style={{
        margin: "30px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "20px",
          maxWidth: "500px",
        }}
      >
        {isSignUp ? (
          <TextField
            variant="outlined"
            type="email"
            value={userInfo.email}
            onChange={(e) => setEmail(e)}
            placeholder=" eg. xyz@email.com"
            color="primary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        ) : null}
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "20px",
          maxWidth: "500px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder=" Username"
          value={userInfo.username}
          onChange={(e) => {
            const re = /^[a-zA-Z0-9_]+$/;
            if (e.target.value === "" || re.test(e.target.value)) {
              setUsername(e);
            }
          }}
          color="primary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          textAlign: "left",
          margin: "0 auto",
          marginBottom: "20px",
          maxWidth: "500px",
        }}
      >
        <TextField
          variant="outlined"
          type="password"
          placeholder=" Password"
          value={userInfo.password}
          onChange={(e) => setPassword(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
          style={{
            paddingBottom: "10px",
          }}
        />
        {error ? (
          !isSignUp ? (
            <label
              style={{
                marginLeft: "10px",
                color: "red",
              }}
            >
              Invalid Username or Password
            </label>
          ) : null
        ) : null}
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        style={{
          textAlign: "center",
          margin: "0 auto",
          marginBottom: "30px",
          maxWidth: "300px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isFetching}
          onClick={() => handleSubmit()}
          style={{
            width: "100%",
            borderRadius: "30px",
          }}
          size="large"
        >
          {isSignUp ? "Register" : "Login"}
        </Button>
      </form>
      {isFetching ? (
        <>
          <CircularProgress color="secondary" size={60} />
        </>
      ) : null}
    </div>
  );
};

export default LoginForm;
