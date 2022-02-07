import "./App.css";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education"
import Sidebar from "./components/Sidebar";
import { useState } from 'react'

function App() {
  const [page, setPage] = useState(0)
  const displayPage = () => {
    if (page == 0) {
      return <AboutMe/>
    }
    if (page == 1) {
      return <Education/>
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