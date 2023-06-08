import './Header.css'
import logo from '../../Assets/logo.png'
import {AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineProfile, AiTwotoneStar} from 'react-icons/ai';
import {GoPerson } from 'react-icons/go';
import {FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';





const Header = () => {
  function activelinks() {
    document.querySelector('.header .links').classList.toggle('active')
  }
  // navbar fixed scroll
  window.onscroll = ()=> {
    if(window.scrollY > 400) {
      document.querySelector(".header").classList.add("active") ;
    }
    else {
      document.querySelector(".header").classList.remove("active") ;
    }
  } 
  return (
    <div className='header'>
       <div className='container d-flex'>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='links'>
                <ul className='links-list'>
                    <li className='list-items'><Link to='/home'><span><AiOutlineHome/></span>Home</Link></li>
                    <li className='list-items'><Link to='/about'><span><GoPerson/></span>About</Link></li>
                    <li className='list-items'><Link to='projects'><span><AiOutlineFundProjectionScreen/></span>Projects</Link></li>
                </ul>
                <a href='https://github.com/SidahmedBrihi' target={"_blank"} className='links-git'><span className='me-2 github'><FiGithub/></span><span className='star'><AiTwotoneStar/></span></a>
            </div>
            <div className='button' onClick={activelinks}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </div> 
    </div>
  )
}

export default Header