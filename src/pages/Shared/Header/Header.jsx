import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, } from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex justify-center'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={40} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>

        </Container >
    );
};

export default Header;