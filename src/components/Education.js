import "./Education.css"
import farm from './images/farm.jpg'

const Intro = () => {
  return <div className="Intro">
      <h1>Final Year Applied Mathematics major in National University of Singapore.</h1>
      <h3>I specialise in Mathematical Modelling and Data Analytics, with a minor in Statistics.</h3>
      <p>Aug 2018 to May 2022</p>
      <p>CAP 4.08</p>
    </div>
  }

const Modules = () => {
  return <div className="Modules">
    <div><h3>Modules Taken</h3>
      <div><a>Mathematical Finance</a></div>
      <div><a>Regression Analysis</a></div>
      <div><a>Statistics for Actuarial Science</a></div>
      <div><a>Matrix Computation</a></div>
      <div><a>Coding and Cryptography</a></div>
      <div><a>Time Series Analysis</a></div>
    </div>
    </div>
}
const Overseas = () => {
  return <div className="Overseas">
    <div><h3>Overseas Module, Hokkaido Agricultural University</h3>
    <h4>Agriscience in Singapore and Japan</h4>
      <p>I had the privilege to represent NUS in a joint-module program, partnering with students from Hokkaido Agricultural University.</p>
      <p>Together, we studied the each country's food security landscape, researched and presented on food sustainability solutions using agriscience.</p>
    </div>
    </div>
}
  

const Education = () => {
 
  return <div className="Education">
    <div className="Top">
      <h1>Education</h1>
    </div>
    <div className="Bottom">
    <div className="Left">
      <img className="farm" src={farm}/>
      </div>
    <div className="Right">
      <Intro />
      <Modules />
      <Overseas />
      </div>
      </div>
    </div>
};
export default Education;
