import { Project } from '../../Component/index'
import './Projects.css'
import {projects} from '../../Api/ProjectsApi'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <h2 className='text-center mb-3'>My Recent <span>Works</span></h2>
        <p className='text-center text-white-50 mb-5'>Each <span>project</span> is a unique piece of <span>development</span></p>
        <div className='projects-area pb-4'>
            {
                projects.map((elm)=> {
                    return  <Project data={elm} />
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Projects