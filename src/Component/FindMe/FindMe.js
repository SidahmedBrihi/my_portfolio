import "./FindMe.css"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';




const FindMe = () => {
  return (
    <div className='find-me'>
      <div className="content">
        <h2>Find me on</h2>
        <p>Feel free to <span>connect</span> with me</p>
        <ul className="links">
            <li key={1} className="link"><a href="https://github.com/SidahmedBrihi" target='_blank'><span><FaGithub /></span></a></li>
            <li key={2} className="link"><a href="https://www.linkedin.com/in/sidahmed-brihi-1309a3274/" target='_blank'><span><FaLinkedin /></span></a></li>
            <li key={3} className="link"><a href="https://www.instagram.com/__sid_ahm_ed__/" target='_blank'><span><AiFillInstagram /></span></a></li>
            <li key={4} className="link"><a href="https://www.facebook.com/profile.php?id=100012959640684" target='_blank'><span><BsFacebook /></span></a></li>
        </ul>
      </div>
    </div>
  )
}

export default FindMe