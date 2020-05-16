import React, { useState } from 'react';

const LoginPage = () => {
    const [isSignUp, setSignUp] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
    });

    const setUsename = (e) => {
        setUserInfo({
            ...userInfo,
            username: e.nativeEvent.text,
        });
    };

    const setPassword = (e) => {
        setUserInfo({
            ...userInfo,
            password: e.nativeEvent.text,
        });
    };

    const setEmail = (e) => {
        setUserInfo({
            ...userInfo,
            email: e.nativeEvent.text,
        });
    };
    const toggleSignup = () => {
        setUserInfo({
            username: "",
            password: "",
            email: "",
        });
        setSignUp(!isSignUp);
    };
    return (
        <p>LOGIN</p>
    );
}

export default LoginPage;