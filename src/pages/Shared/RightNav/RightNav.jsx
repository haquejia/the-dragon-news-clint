import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import background from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='my-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With GitHub</Button>
            </div>
            <div>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>

            </div>
            <Qzone></Qzone>
            <div>
                <img src={background} alt="" />
            </div>
        </div>

    );
};

export default RightNav;