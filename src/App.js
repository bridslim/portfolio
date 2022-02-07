import "./App.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education"
import Sidebar from "./components/Sidebar";
import { useState } from 'react'
import WorkExperience from "./components/WorkExperience";
import Others from "./components/Others";
import loading from "./components/images/loading.jpg"


const LoadingPage = () => {
  return <div className="LoadingPage">
    <div className="Hello">    
    <h1>Hello!</h1>
    <h1>I'm Bridget!</h1>
    <p>Here is my portfolio, enjoy~ :)</p>
    </div>
    <img className="loading" src={loading}/>
  </div>
}
function App() {
  const [page, setPage] = useState(0)
  const displayPage = () => {
    if (page == 0) {
      return <LoadingPage/>
    }
    if (page == 1) {
      return <AboutMe/>
    }
    if (page == 2) {
      return <Education/>
    }
    if (page == 3) {
      return <WorkExperience/>
    }
    if (page == 4) {
      return <Others />
    }
  }
  return (
    <div className="App">
      <Sidebar setPage={setPage}/>
      <div className="RightSide">{displayPage()}</div>
    </div>
    )
}
export default App;