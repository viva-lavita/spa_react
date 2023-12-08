import React from "react";
import { Col, Card, Button } from 'react-bootstrap';


export default function HomeCard({ img, title, text }) {
    return (
      <Col lg='4' className='mx-auto text-center'>
        <Card style={{ width: '18rem', margin: '1rem', border: 'none' }}>
          <Card.Img variant="top" src={img} className="rounded-circle bd-placeholder-img" style={{ width: '9rem', height: '9rem', objectFit: 'cover', margin: 'auto' }}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Button variant='outline-success'>Кнопка</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }