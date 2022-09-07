import Navbar from './Components/Navbar/Navbar'
import Slide from './Components/Slide/Slide'
import Electric from './Components/Electric/Electric'
import { Routes, Route } from 'react-router-dom'
import Population from './Components/Population/Population'

import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/population' element={<Population/>} />
        <Route path='/slide' element={<Slide />} />
        <Route path='/electric' element={<Electric />} />
      </Routes>
    </div>
  );
}

export default App;
