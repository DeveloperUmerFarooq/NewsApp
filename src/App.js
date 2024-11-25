import './App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
const App=()=>{
  const [progress,setProgress] = useState(0);
    return (
      <>
        <BrowserRouter>
          <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} category="general" key="general"/>}></Route>
            <Route path="/bussiness" element={<News setProgress={setProgress} category="business" key="bussiness"/>}></Route>
            <Route path="/entertainment" element={<News setProgress={setProgress} category="entertainment" key="entertainment"/>}></Route>
            <Route path="/health" element={<News setProgress={setProgress} category="health" key="health"/>}></Route>
            <Route path="/sports" element={<News setProgress={setProgress} category="sports" key="sports"/>}></Route>
            <Route path="/technology" element={<News setProgress={setProgress} category="technology" key="technology"/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  
}
export default App;