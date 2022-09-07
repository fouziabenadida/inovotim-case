import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import './Slide.css'
import { useNavigate } from 'react-router-dom'



export default function Slide() {

    const navigate = useNavigate();

    return (
        <>
            <Carousel>

                <Carousel.Item >
                    <div className='first-slide'>
                        <h2 className='titre-slide1'>INOVATION EĞİTİMİ 101</h2>
                        <div>
                            <img
                                className="d-block  "
                                src='./assets/inovasyon-nedir 3.png'
                            />
                        </div>
                        <div >
                            <img
                                className="d-block"

                                src='./assets/inov.png'
                            />
                        </div>
                        <div >
                            <img
                                className="d-block"

                                src='./assets/nv.png'
                            />
                        </div>
                        <div>
                            <img
                                className="d-block"

                                src='./assets/2015.png'
                            />
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className='second-slide'>
                        <div >
                            <img
                                className="d-block"

                                src='./assets/img5.png'
                            />
                        </div>
                        <div>
                            <img
                                className="d-block"
                                src='./assets/img6.png'
                            />
                        </div>
                        <div >
                            <img
                                className="d-block"
                                src='./assets/img7.png'
                            />
                        </div>
                        <div>
                            <img
                                className="d-block"
                                src='./assets/img8.png'
                            />
                        </div>
                        <div>
                            <Button onClick={() => {
                                navigate("/electric")
                            }} className='btn'>Devam et </Button>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>
        </>
    );
}












