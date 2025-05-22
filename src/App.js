import './App.css';
import SignInOutContainer from './containers/index.js';
import  Homepage from './components/homepage.js';
import Index from './containers/index.js';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/components" element={<Homepage />} />
    </Routes>
  
  );
}

export default App;
