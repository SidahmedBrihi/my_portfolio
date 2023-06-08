import './Introduce.css'
import logo_0 from '../../Assets/avatar.svg'




const Introduce = () => {
  return (
<div className='introduce'>
    <div className='container'>
        <div className='text'>
            <h2 className='text-header'>LET ME <span>INTRODUCE</span> MYSELF</h2>
            <p className='text-one'> Hi, I'm <span>Sid Ahmed Brihi</span>. A passionate Front-end React Developer based in <span>Tipaza, Algeria.</span></p>
            <p className='text-two'>I fell in love with <span>programming</span> and I have at least learnt something, I think… </p>
            <p className='text-three'>My field of Interest's are building new  <span>Web Technologies and Products</span> and also in areas related to Blockchain.</p>
        </div>
        <div className='image'>
            <img src={logo_0} alt='' />
        </div>
    </div>
</div>
  )
}

export default Introduce