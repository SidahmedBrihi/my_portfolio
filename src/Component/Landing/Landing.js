import "./Landing.css"
import logo from '../../Assets/hand.png'
import logo_1 from '../../Assets/home-main.svg'
import Typewriter from 'typewriter-effect';


const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <div className="me">
            <h1 className="hello">Hi There! <img src={logo} alt=""/></h1>
            <h2 className="name">I'm <span>Sid Ahmed Brihi</span></h2>
            <h2 className="job">
            <Typewriter
                options={{
                strings: [
                "Front-End React Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
            }}
    />
            </h2>
        </div>
        <div className="image">
            <img src={logo_1} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Landing