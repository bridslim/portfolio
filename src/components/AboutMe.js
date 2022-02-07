import "./AboutMe.css"
import profile from "./images/profile.jpg"


const Intro = () => {
  return <div className="Intro">
      <h1>Hi, nice to meet you!</h1>
      <h3>I'm a positive, outgoing individual looking for internships in Data Science.</h3>
    </div>
  }
const Skills = () => {
  return <div className="Skills">
    <div><h3>Data Analytics</h3>
      <a>Familiar with Time-Series Analysis, Regression, Machine-Learning, SVM, and more.</a>
    </div>
    <div><h3>Data Manipulation</h3>
    <a>I have a strong background in Python, R Programming, Matlab and Excel. Familiar with libraries such as Pandas, Numpy, Scipy and more!</a>
    </div>
    <div><h3>Others</h3>
    <a>Dabbled with GoogleAppScript, Cybersecurity.</a>
    </div>
</div>
}
const Interests = () => {
  return <div className="Interests">
    <div><h3>Puzzles</h3>
      <a>I'm an avid sudoku player, and I frequently fix jigsaw puzzles! I'd love to talk about puzzles any day!</a>
    </div>
    <div><h3>Music</h3>
    <a>I love picking up new instruments! So far I have learnt piano, guitar and drums proficiently.</a>
    </div>
    <div><h3>Others</h3>
    <a>I like to pick up new hobbies like crocheting, tea-brewing, and more! I enjoy public speaking and discussing social issues.</a>
    </div>
</div>
}
  

const AboutMe = () => {
 
  return <div className="aboutMe">
    <div className="Top">
      <h1>About Me</h1>
    </div>
    <div className="Bottom">
    <div className="Left">
      <Intro />
      <h2>My skills involve</h2>
      <Skills />
      <h2>I enjoy</h2>
      <Interests />
      </div>
    <div className="Right">
      <img className="profile" src={profile}/>
      </div>
      </div>
    
    </div>
};

export default AboutMe;
