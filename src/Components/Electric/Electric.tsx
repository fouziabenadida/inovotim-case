import { Button } from 'react-bootstrap'
import './Electric.css'
import {useNavigate} from 'react-router-dom'

export default function Electric() {
    const navigate = useNavigate();
    return (
        <div className='banner'>

            <div >
                <img src="./assets/electric1.png" alt="" />
            </div>
            <div >
                <img src="./assets/electric2.png" alt="" />
            </div>
            <div>
                <img src="./assets/electric3.png" alt="" />
            </div>
            <div >
                <img src="./assets/electric4.png" alt="" />
            </div>
            <div>
                <Button onClick={() => navigate("/population")} className='continue'>
                    Devam et
                </Button>
            </div>

        </div>
    )
}
