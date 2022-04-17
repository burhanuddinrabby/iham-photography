import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loding/Loading';

const Login = () => {
    const [checked, setChecked] = useState(false);
    let errorMessage;
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        console.log(error.code);
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
            errorMessage = 'Wrong Password Please Try Again';
        }
        else if (error.message === 'Firebase: Error (auth/user-not-found).') {
            errorMessage = 'User Not Found. Maybe invalid email or password';
        }
        else {
            errorMessage = error.message;
        }
    }
    if (user) {
        console.log(user.user);
        navigate('/');
    }
    const submitValue = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='text-center my-5'>
                <h1>Please
                    <span className='text-primary'> Login</span>
                </h1>
            </div>
            <Container className='mt-5'>
                <Form onSubmit={submitValue} className='w-75  mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox" label="I agree terms and condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!checked}>
                        Login
                    </Button>
                    <br /><br />
                    {error && <p className='text-danger'>{errorMessage} <br /></p>}
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </Form>
                {loading && <Loading />}
            </Container>
        </div>
    );
};

export default Login;