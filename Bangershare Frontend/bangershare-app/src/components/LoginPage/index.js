import React, { useState } from "react";
import LoginForm from "../../containers/LoginPage/LoginForm";
import { Button, ButtonGroup, Paper } from "@material-ui/core";

const LoginPage = () => {
  const [isSignUp, setSignUp] = useState(false);

  const handleToggle = (boolean) => {
    setSignUp(boolean);
    var x = document.getElementById("btn");

    //On button toggle, slides the coloured div to cover the correct button
    if (boolean) {
      x.style.marginLeft = "100px";
    } else {
      x.style.marginLeft = "0px";
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        variant="outlined"
        elevation={2}
        style={{
          textAlign: "center",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "12vh",
          marginTop: "12vh",
          maxWidth: "1000px",
          width: "100%",
          maxHeight: "1000px",
          height: "450px",
        }}
      >
        <ButtonGroup
          color="primary"
          variant="contained"
          style={{
            marginTop: "50px",
            width: "100%",
            maxWidth: "200px",
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "200px",
              textAlign: "center",
            }}
          >
            {/*
            Create div component shader which shades the button for the current page
            the user is on 
            */}
            <div
              id="btn"
              style={{
                position: "absolute",
                width: "100px",
                height: "40px",
                background: "linear-gradient(to right, #7d12ff, #5E35B1)",
                borderRadius: "30px",
                transition: ".5s",
              }}
            ></div>
            <Button
              disabled={!isSignUp}
              onClick={() => handleToggle(false)}
              style={{
                width: "50%",
                padding: "10px 30px",
                borderRadius: "30px",
                color: "#FFFFFF",
              }}
            >
              Login
            </Button>
            <Button
              disabled={isSignUp}
              onClick={() => handleToggle(true)}
              color="primary"
              style={{
                width: "50%",
                padding: "10px 30px",
                borderRadius: "30px",
                color: "#FFFFFF",
              }}
            >
              Register
            </Button>
          </div>
        </ButtonGroup>
        <LoginForm isSignUp={isSignUp} />
      </Paper>
    </div>
  );
};

export default LoginPage;
