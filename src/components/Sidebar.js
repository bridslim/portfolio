import './Sidebar.css'
import face from './images/face.jpg'

const Sidebar = ({setPage}) => {
  return <div className='Sidebar'>
      <img className="face" src={face} width="160" height = "160" />
      <div className='Main'>
        <h1>Bridget Lim</h1>
        <p><button onClick={()=> setPage(1)}>About me</button></p>
        <p><button onClick={()=> setPage(2)}>Education</button></p>
        <p><button onClick={()=> setPage(3)}>Work Experience</button></p>
        <p><button onClick={()=> setPage(4)}>Others</button></p>
      </div>
      <div className='ContactInfo'>
      <h2>Connect with me</h2>
      <p>bridgetgraceb@gmail.com</p>
      <p> 
      <a href="https://www.linkedin.com/in/bridget-lim-b960a619b/"
        target="_blank"
        rel="noopener noreferrer">
        LinkedIn Profile
        </a>
      </p>
      </div>
  </div>
}

export default Sidebar;
