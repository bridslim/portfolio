import "./App.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education"
import Sidebar from "./components/Sidebar";
import { useState } from 'react'
import WorkExperience from "./components/WorkExperience";

function App() {
  const [page, setPage] = useState(0)
  const displayPage = () => {
    if (page == 0) {
      return <AboutMe/>
    }
    if (page == 1) {
      return <Education/>
    }
    if (page == 2) {
      return <WorkExperience/>
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