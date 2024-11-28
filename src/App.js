import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Hero';
import AboutPage from './components/about/About';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<AboutPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
