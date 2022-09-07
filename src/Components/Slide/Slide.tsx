import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import './Slide.css'

export default function Slide() {
    return (

        <Carousel>

            <Carousel.Item >
                <div className='first-slide'>
                    <h2 className='titre-slide1'>INOVATION EĞİTİMİ 101</h2>
                    <div className='img1'>
                        <img
                            className="d-block  "
                            src='./assets/inovasyon-nedir 3.png'
                        />
                    </div>
                    <div className='img2'>
                        <img
                            className="d-block "
                            src='./assets/inov.png'
                        />
                    </div>
                    <div className='img3'>
                        <img
                            className="d-block "
                            src='./assets/nv.png'
                        />
                    </div>
                    <div className='img4'>
                        <img
                            className="d-block "
                            src='./assets/2015.png'
                        />
                    </div>
                </div>
                
            </Carousel.Item>
            <Carousel.Item>
            <div className='second-slide'>
                  
                    <div className='img5'>
                        <img
                            className="d-block  "
                            src='./assets/img5.png'
                        />
                    </div>
                    <div className='img6'>
                        <img
                            className="d-block "
                            src='./assets/img6.png'
                        />
                    </div>
                    <div className='img7'>
                        <img
                            className="d-block "
                            src='./assets/img7.png'
                        />
                    </div>
                    <div className='img8'>
                        <img
                            className="d-block "
                            src='./assets/img8.png'
                        />
                    </div>
                    
                </div>
                <Button className='btn'>Devam</Button>

            </Carousel.Item>

        </Carousel>

    );
}










