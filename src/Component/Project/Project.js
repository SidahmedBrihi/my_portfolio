import './Project.css'
import { BsGithub } from 'react-icons/bs';
import { GrShare } from 'react-icons/gr';




const Project = (props) => {
  return (
    <div className='project row mb-4'>
        <div className='image col-12 col-lg-6'>
            <img src={props.data.img}  className= '' alt='' />
        </div>
        <div className='project-text col-12 col-lg-6 px-1 px-sm-5 text-center '>
            <h5 className='mb-3'>{props.data.title}</h5>
            <p className='text-white-50'>{props.data.description}</p>
            <ul className='d-flex justify-content-evenly align-items-center fs-5'>
                <li><a href={props.data.code}>Code <span><BsGithub /></span></a></li>
                <li><a href={props.data.demo}>Live Demo <span><GrShare /></span></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Project