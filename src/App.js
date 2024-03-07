import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App=()=>{
  const pageSize=15;
  const apiKey=process.env.REACT_APP_NEWS_API
  const[progress,setProgress] = useState(0);
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='Home' category="general"/>}></Route>  
        <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='general' category="general"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='business' category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='entertainment' category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='health' category="health"/>}></Route>
        <Route exact path="science" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='science' category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='sports' category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in" key='technology' category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    );
  
}

export default App;

