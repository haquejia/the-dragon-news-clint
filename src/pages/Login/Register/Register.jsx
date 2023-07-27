import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleResister = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        const name = form.name.value

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
            })
            .catch(error => console.log(error))
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)

    }

    return (
        <Container className='w-25 mx-auto'>
            <h3 className='mt-4 text-center'>Please Register !</h3>
            <Form onSubmit={handleResister} className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
                </Form.Group>
                <Button className='w-100'
                    variant="secondary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />

                <Form.Text className="text-secondary">
                    Already have an account?<Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>

            </Form>
        </Container>
    );
};

export default Register;