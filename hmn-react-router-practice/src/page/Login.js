import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event)=> {
        //페이지가 계속 리프레쉬 하는걸 막아준다.
        event.preventDefault();
        console.log("login user function issue");
        setAuthenticate(true);
        navigate('/');
    }
  return (
    <Container className='login-area'>
        <Form className='login-form' onSubmit={(event)=>loginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                로그인
            </Button>
        </Form>
    </Container>
  )
}

export default Login