import {useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './VideoComponent.css'

export default function VideoComponent() {
  const navigate = useNavigate();
  return (
    <>
    <div >
      <img className='div-video' src="./assets/video.png" alt="" />
    </div>
    <div>
      <Button onClick={() => navigate("/question")} className='video-btn'>Devam et</Button>
    </div>
    </>
  )
}

