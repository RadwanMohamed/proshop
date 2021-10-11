import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { Col,Button, Form, Row } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux';
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {login} from "../actions/userAction";
const LoginPage = ({history,location}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const querParams = new URLSearchParams(location.search);
    const redirect = (querParams.get("redirect") ? querParams.get("redirect") : '/');
    const dispatch = useDispatch();
    const userLogin = useSelector(state=>state.userLogin);
    const {loading,error, userInfo} = userLogin;
    useEffect(()=>{
        if(userInfo && Object.entries(userInfo).length > 0){
            history.push(redirect);
        }
    },[useEffect,userInfo,redirect]);
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(login(email,password))
        
    }
    return (
        <FormContainer>
            <h1>Sign in</h1>
            {error && <Message varient='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='enterEmail' value={email} onChange={(e)=>setEmail(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Email password</Form.Label>
                    <Form.Control type='password' placeholder='enterPassword' value={password} onChange={(e)=>setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                sign in
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={redirect?`/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage
