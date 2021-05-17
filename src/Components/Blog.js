import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import React, { useEffect, useState,Fragment } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Parser from 'html-react-parser';
import { Markup } from 'interweave';
export default function Blog(props) {
    const { id } = useParams()
    console.log(id);
    const [myData, setMyData] = useState({});
    

    useEffect(() => {
        axios.get(`https://webicoun-backend-hajkn.run-ap-south1.goorm.io/blogs/${id}`)
            .then(function (response) {
                // handle success
                setMyData(response.data.blog[0]);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    var thisIsMyCopy = myData.description;
    return (
        <div>

            <Card style={{ width: '18rem' }} onClick={props.onClick}>
                <Card.Img variant="top" src={myData.image} />
                <Card.Body>
                    <Card.Title>{myData.title}</Card.Title>
                    <Card.Text>
                        Author:  {myData.author}
                    </Card.Text>
                    <Markup content={thisIsMyCopy} />
                

                </Card.Body>
            </Card>

            <Link className="navlink" to='/blog'>Go Back</Link>

        </div>
    )
}
