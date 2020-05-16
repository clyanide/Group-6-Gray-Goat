import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'

const LoginPage = (props) => {
    const { handleSignup, handleLogin } = props;
    const [isSignUp, setSignUp] = useState(false);
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

    const handleToggle = (boolean) => {
        setUserInfo({
            username: "",
            password: "",
            email: "",
        });
        setSignUp(boolean);
    };

    const handleSubmit = () => {
        if (isSignUp) {
            handleSignup(userInfo);
        } else {
            handleLogin(userInfo)
        }
    }

    return (
        <>
            <Button.Group>
                <Button onClick={() => handleToggle(false)} disabled={!isSignUp} >Login</Button>
                <Button onClick={() => handleToggle(true)} disabled={isSignUp}>Signup</Button>
            </Button.Group>
            <Form onSubmit={() => handleSubmit()}>
                {isSignUp ?
                    <Form.Field>
                        <label>Email</label>
                        <Form.Input
                            placeholder="eg. xyz@email.com"
                            type="email"
                            value={userInfo.email}
                            onChange={(e) => setEmail(e)}
                        />
                    </Form.Field>
                    :
                    null}
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
                <Form.Field control={Button}>Sign Up</Form.Field>
            </Form>
        </>
    );
}

export default LoginPage;