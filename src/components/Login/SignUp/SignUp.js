import React, { useState } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const style = {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '0.2'
}
const SignUp = () => {
    const [checked, setChecked] = useState(false);
    const [errorMessage, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (error) {
        console.log(error);
        setError(error.message);
        return;
    }
    if (user) {
        console.log(user.user);
    }
    const submitValue = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='text-center w-75 mx-auto my-5'>
                <h1>Please Create An
                    <span className='text-primary'> Account</span> with valid information.
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
                        Submit
                    </Button>

                    {loading && <div style={style}>
                        <Spinner animation="border" variant="warning" />
                    </div>}

                    {error && <p>{errorMessage}</p>}
                    <br /><br />
                    Already have an account? <Link to='/login'>Login</Link>
                </Form>
            </Container>
        </div>
    );
};

export default SignUp;