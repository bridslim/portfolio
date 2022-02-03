import "./App.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education"
//import Sidebar from './components/Sidebar';
import { useState } from 'react'


function App() {
  const [page, setPage] = useState(0)
  
  const setAboutMe = () => {
    setPage(0);
  }

  const setEducation = () => {
    setPage(1);
  }

  const displayPage = () => {
    if (page == 0) {
      return <AboutMe/>
    }
    if (page == 1) {
      return <Education/>
    }
  }
  const Sidebar = () => {
    return <div className='Sidebar'>
        <img src="../public/face.jpg" alt=""></img>
        <h1>Bridget Lim</h1>
        <p><button onClick={()=> setAboutMe()}>About me</button></p>
        <p><button onClick={()=> setEducation()}>Education</button></p>
        <p>Work Experience</p>
        <p>Volunteer</p>
        <h2>Hit me up!</h2>
        <p>bridgetgraceb@gmail.com</p>
        <p> 
        <a href="https://www.linkedin.com/in/bridget-lim-b960a619b/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn Profile
          </a>
        </p>
    </div>
  };
  return (
    <div className="App">
      <Sidebar/>
      {displayPage()}
    </div>

    )
}


export default App;