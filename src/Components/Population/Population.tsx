
import { Carousel } from 'react-bootstrap'
import './Population.css'

export default function Population() {
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
                    </div>

                </Carousel.Item>

            </Carousel>


        </>
    )
}
