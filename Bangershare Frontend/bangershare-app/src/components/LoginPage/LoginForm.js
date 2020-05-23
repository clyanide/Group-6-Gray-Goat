import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

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
    <div style={{
      margin: "30px",
    }}>
      <form style={{
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "20px",
        maxWidth: "500px",
      }}>
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
                <InputAdornment>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        ) : null}
      </form>
      <form style={{
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "20px",
        maxWidth: "500px",
      }}>
        <TextField
          variant="outlined"
          placeholder=" Username"
          value={userInfo.username}
          onChange={(e) => setUsername(e)}
          color="primary"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </form>
      <form style={{
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "30px",
        maxWidth: "500px",
      }}>
        <TextField
          variant="outlined"
          type="password"
          placeholder=" Password"
          value={userInfo.password}
          onChange={(e) => setPassword(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </form>
      <form style={{
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "30px",
        maxWidth: "300px",
      }}>
        <Button
          variant="contained"
          color="primary"
          disabled={isFetching}
          onClick={() => handleSubmit()}
          style={{
            width: "100%",
            borderRadius: "30px"
          }}
          size="large"
        >
          {isSignUp ? "Register" : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
