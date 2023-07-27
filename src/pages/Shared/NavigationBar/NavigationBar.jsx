import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/category/0'>Home</Link>

                            <Link>About</Link>

                            <Link>Career</Link>

                        </Nav>
                        <Nav className=''>
                            {
                                user && <FaRegUserCircle style={{ fontSize: '2rem ' }}></FaRegUserCircle>

                            }
                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="dark">logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="dark">Login</Button>
                                    </Link>


                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </container>
    );
};

export default NavigationBar;
