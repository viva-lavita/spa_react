import React from 'react';
import { Carousel } from 'react-bootstrap';


export default function Slider({imgs}) {
    return (
            <Carousel>
                {imgs.map(img => <Carousel.Item key={img.path} style={{height: '500px'}}>
                    <img
                        className="d-block w-100"
                        src={img.path}
                        alt={img.alt}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <Carousel.Caption>
                        <h3>{img.title}</h3>
                        <p>{img.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>)}
            </Carousel>
    )
}
