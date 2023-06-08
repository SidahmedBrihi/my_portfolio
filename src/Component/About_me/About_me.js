import './About_me.css'
import { BsAirplaneEngines } from 'react-icons/bs';
import { ImBooks } from 'react-icons/im';
import { BiGame } from 'react-icons/bi';
import logo from '../../Assets/about.png'




const About_me = () => {
  return (
    <div className='about-me'>
      <div className='container row'>
        <div className='about-text col-12 col-lg-6'>
          <h2 className='text-center mb-5'>Know Who <span>I'm</span></h2>
          <p className='me fs-5 mb-3'>Hi Everyone, I am <span>Sid Ahmed Brihi</span> from <span>Tipaza, Algeria.</span></p>
          <p className='dip fs-6 mb-3'>I am a student pursuing an Integrated MSc (IMSc) in electrical engineering.</p>
          <p className='desc'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Bootstrap, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>
          <p className='activities fs-5'>Apart from <span>coding</span>, some other <span>activities</span> that I love to do!</p>
          <ul>
            <li><span className='fs-5 me-2'><BiGame/></span>Playing Games</li>
            <li><span className='fs-5 me-2'><ImBooks/></span>Reading Books</li>
            <li><span className='fs-5 me-2'><BsAirplaneEngines /></span>Travelling</li>
          </ul>
        </div>
        <div className='image col-12 col-lg-6 text-center mt-3 mt-lg-0 ' >
            <img src={logo} className='about-img '/>
        </div>
      </div>
    </div>
  )
}

export default About_me