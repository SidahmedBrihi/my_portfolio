import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook} from 'react-icons/bs';




const Footer = () => {
  return (
    <div className='footer py-3'>
         <div className='container d-flex flex-column flex-sm-row justify-content-between align-items-center'>
            <p className='footer-designed  mb-0'>Developed by Sid Ahmed Brihi</p>
            <div className='footer-copy '>copyright &copy; 2023 sidah</div>
            <ul className='links d-flex '>
            <li key={1} className="link"><a href="https://github.com/SidahmedBrihi" target='_blank' className='text-black me-3 fs-5 '><span><FaGithub /></span></a></li>
            <li key={2} className="link"><a href="https://www.linkedin.com/in/sidahmed-brihi-1309a3274/" target='_blank' className='text-black me-3 fs-5'><span><FaLinkedin /></span></a></li>
            <li key={3} className="link"><a href="https://www.instagram.com/__sid_ahm_ed__/" target='_blank' className='text-black me-3 fs-5'><span><AiFillInstagram /></span></a></li>
            <li key={4} className="link"><a href="https://www.facebook.com/profile.php?id=100012959640684" target='_blank' className='text-black fs-5'><span><BsFacebook /></span></a></li>
            </ul>
         </div>
    </div>
  )
}

export default Footer