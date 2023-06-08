import './Skills.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiSass, SiPug } from 'react-icons/si';
import { DiCss3, DiJavascript1, DiReact, DiBootstrap  } from 'react-icons/di';





const Skills = () => {
  return (
    <div className='skills'>
      <div className='container'>
        <h2 className=' skills-header mb-5 text-center text-white'>Tech <span>Stack</span></h2>
        <div className='skills-lang'>
          <div className='skill '><span><AiFillHtml5 /></span></div>
          <div className='skill '><span><DiCss3 /></span></div>
          <div className='skill '><span><DiJavascript1 /></span></div>
          <div className='skill '><span><DiReact /></span></div>
          <div className='skill '><span><DiBootstrap /></span></div>
          <div className='skill '><span><SiSass /></span></div>
          <div className='skill '><span><SiPug /></span></div>
        </div>
      </div>
    </div>
  )
}

export default Skills