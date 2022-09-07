
import { Button } from 'react-bootstrap'
import './VideoComponent.css'

export default function VideoComponent() {
  return (
    <>
    <div >
      <img className='div-video' src="./assets/video.png" alt="" />
    </div>
    <div>
      <Button className='video-btn'>Devam et</Button>
    </div>
    </>
  )
}

