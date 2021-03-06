import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './../Ui/Input/Input';
import Card from './../hoc/Card';
import Button from './../Ui/Button/Button';
import { Entypo } from '@expo/vector-icons';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const Login = ({loginHandler}) => {

    // définir le consumer
    
    const userContext = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onChangeEmailHandler = (text) => {
        setEmail(text);
    }

    const onChangePasswordHandler = (text) => {
        setPassword(text);
    }

    const onSubmitHandler = () => {

        if (password.trim().length > 5  && validateEmail(email)) {

            console.log(email);
            console.log(password);

          
            userContext.login();
        }else{
            setEmailError(validateEmail(email) ? '' : 'invalid email');
            setPasswordError(password.trim().length > 5  ? '' : 'invalid password');
        }
    }

    // console.log('Email:  ', email);
    console.log('password:  ', password);
    return (
        <Card header='Please, Login here!'>
            <Input val={email} handlerFunction={onChangeEmailHandler} errorMsg={emailError} placeHolder='Email'>
                <Entypo name='email' size={24} color='royalblue' />
            </Input>

            <Input val={password} handlerFunction={onChangePasswordHandler} errorMsg={passwordError} placeHolder='Password' isPassword>
                <Entypo name='lock' size={24} color='royalblue' />
            </Input>

        
            <Button press={onSubmitHandler}>Login</Button>
        </Card>
    )
}

export default Login

const styles = StyleSheet.create({})



