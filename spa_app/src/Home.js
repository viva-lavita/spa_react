import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from './components/Slider';
import HomeCard from './components/HomeCard';


import img1 from './static/img1.jpg';
import img2 from './static/img2.jpeg';
import img3 from './static/img3.jpg';
import img4 from './static/img4.jpg';
import img5 from './static/img5.gif';
import img6 from './static/img6.gif';



export default function Home() {

    const imgs = [
        {path: img1, alt: 'First slide', title: 'First slide label', text: 'Тест-тест'}, 
        {path: img2, alt: 'Second slide', title: 'Second slide label', text: 'Тест-тест2'}, 
        {path: img3, alt: 'Third slide', title: 'Third slide label', text: 'Тест-тест3'},
    ]

    const imgsCard = [
        {path: img4, alt: 'First slide', title: 'First slide label', text: 'Тест-тест'}, 
        {path: img5, alt: 'Second slide', title: 'Second slide label', text: 'Тест-тест2'}, 
        {path: img6, alt: 'Third slide', title: 'Third slide label', text: 'Тест-тест3'},
    ]
    return (
        <div className='mt-5'>
            <Slider imgs={imgs} />
            <Container style={{ paddingBottom: '2rem', paddingTop: '2rem', display: 'flex'}} className='d-flex justify-content-center marketing'>
                <Row>
                    {imgsCard.map(img => 
                        <HomeCard key={img.path} img={img.path} title={img.title} text={img.text} />
                    )}
                </Row>
            </Container>
        </div>
    )
}