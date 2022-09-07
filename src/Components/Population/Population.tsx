import {useNavigate} from 'react-router-dom'
import { Button, Carousel } from 'react-bootstrap'
import './Population.css'

export default function Population() {
    const navigate = useNavigate();
    return (
        <>

            <Carousel>
              
                <Carousel.Item>
                    <div className='pop-slide1'>
                        <img
                            
                            src="./assets/population1.png"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='pop-slide2'>
                    
                        <img
                           
                            src="./assets/population2.png"
                            alt="Second slide"
                        />
                        <div className='div-btn'>
                            <Button onClick={() => navigate("/video-component")} className='btn-pop'>Devam et</Button>
                        </div>
                    
                    </div>
                    

                </Carousel.Item>

            </Carousel>


        </>
    )
}
