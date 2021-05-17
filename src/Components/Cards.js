import React from 'react';
import { Card,Button } from 'react-bootstrap';

export default function Cards(props) {
    return (
        <div>
            <Card  onClick={props.onClick} style={{marginLeft:10,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            
            maxWidth:350,height:400, 
             border: '1px solid',padding:10}}>
                <Card.Img  src={props.data.image} style={{height:'250px', width:'350px'}} />
                <Card.Body>
                    <Card.Title style={{fontSize:22,wordWrap:true}}>{props.data.title}</Card.Title>
                    <Card.Text >
                      {props.data.author}
                    </Card.Text>
                    
                
                </Card.Body>
            </Card>
        </div>
    )
}
