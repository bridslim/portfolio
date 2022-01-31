import "./App.css";
import AboutMe from './components/Data/AboutMe';
import RightSide from "./components/RightSide";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <RightSide/>
    </div>
    
  );
}

export default App;