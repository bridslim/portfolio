import './Sidebar.css'

const Sidebar = () => {
  return <div className='Sidebar'>
      <img src="/face.jpg" alt=""></img>
      <h1>Bridget Lim</h1>
      <p>About me</p>
      <p>Education</p>
      <p>Work Experience</p>
      <p>Volunteer</p>
      <h2>Hit me up!</h2>
        <p>bridgetgraceb@gmail.com</p>
        <p> 
        <a
          href="https://www.linkedin.com/in/bridget-lim-b960a619b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
        </p>
  </div>;
};

export default Sidebar;
