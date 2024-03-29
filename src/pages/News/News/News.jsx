import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router-dom';
import EditorsInsights from '../EditorsInsights/EditorsInsights';



const News = () => {
    const news = useLoaderData()
    const { title, details, image_url, category_id } = news;


    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft> </FaArrowLeft> All News In This Category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <div className='my-4'>
                <EditorsInsights></EditorsInsights>

            </div>


        </div>
    );
};

export default News;