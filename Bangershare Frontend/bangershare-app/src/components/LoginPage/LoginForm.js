import React, { useState } from 'react';
import { Button, Form } from "semantic-ui-react";


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

    const changePath = () => {
        if (!isFetching) {

        }
    }

    return (
        <Form loading={isFetching} onSubmit={() => handleSubmit()}>
            {isSignUp ? (
                <Form.Field>
                    <label>Email</label>
                    <Form.Input
                        placeholder="eg. xyz@email.com"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setEmail(e)}
                    />
                </Form.Field>
            ) : null}
            <Form.Field>
                <label>Username</label>
                <Form.Input
                    placeholder="Username"
                    value={userInfo.username}
                    onChange={(e) => setUsername(e)}
                />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <Form.Input
                    type="password"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={(e) => setPassword(e)}
                />
            </Form.Field>
            <Form.Field control={Button}>{isSignUp ? "Register" : "Login"}</Form.Field>
        </Form>
    );
}

export default LoginForm;