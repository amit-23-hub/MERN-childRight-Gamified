import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GovernmentPolicies from './pages/GovernmentPolicies';
import Dictionary from './components/dictionary';

import Hindi from './pages/Hindi';
import Content from './components/Content';

import Storytelling from './components/Storytelling/Storytelling';
import SpotTheExploitation from './components/spotTheExploitation';
import AudioVisual from './components/audiovisual/AudioVisual';
import Quiz from './components/quiz';
import Level1 from './components/audiovisual/Level1';
import Level2 from './components/audiovisual/level2/Level2';
import Level3 from './components/audiovisual/level3/Level3';
import Slider from './components/Storytelling/slider/Slider';
import Listening from './components/Storytelling/listening/Listening';
// import ChatbotComponent from './components/Chatbot/Chatbot';
import NyayGuru from './pages/NyayGuru';




function App() {

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/gov" element={<GovernmentPolicies />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/NyayGuru" element={<NyayGuru />} />
        
        <Route path="/hindi" element={<Hindi />} />

       
        <Route path="/storytelling" element={<Storytelling />} />
        <Route path="/storytelling/slider" element={<Slider />} />
        <Route path="/storytelling/listening" element={<Listening />} />
     
        <Route path="/spot-the-exploitation" element={<SpotTheExploitation />} />
        <Route path="/Audio-Visual" element={<AudioVisual />} />
        <Route path="/AudioVisual/level1" element={<Level1 />} />
        <Route path="/AudioVisual/level2" element={<Level2 />} />
        <Route path="/AudioVisual/level3" element={<Level3 />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
    </Router>
  );
}

export default App;
