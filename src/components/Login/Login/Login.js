import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [checked, setChecked] = useState(false);
    const submitValue = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.email.value, form.password.value);
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
                        Submit
                    </Button>
                    <br /><br />
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </Form>
            </Container>
        </div>
    );
};

export default Login;