import Navbar from './Components/Navbar/Navbar'
import Slide from './Components/Slide/Slide'
import Electric from './Components/Electric/Electric'
import { Routes, Route } from 'react-router-dom'
import Population from './Components/Population/Population'
import './index.css'
import VideoComponent from './Components/Video-component/VideoComponent'
import Question from './Components/Question/Question'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/population' element={<Population/>} />
        <Route path='/' element={<Slide />} />
        <Route path='/electric' element={<Electric />} />
        <Route path='/video-component' element={<VideoComponent/>}/>
        <Route path='/question' element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
