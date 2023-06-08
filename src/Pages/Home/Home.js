import './Home.css'
import {FindMe, Introduce, Landing} from "../../Component/index"


const Home = () => {
  return (
    <div className='home'>
        <Landing/>
        <Introduce />
        <FindMe/>
    </div>
  )
}

export default Home