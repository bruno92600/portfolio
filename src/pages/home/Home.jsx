import React from 'react'
import Profile from "../../assets/IMG_9194.jpeg"
import Logo from "../../assets/logo1.png"
import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import Loader from '../../components/Loader'
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <Loader />
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>Bruno.</span><br/> Développeur web.</h1>
          <p className="home__description">Passionné par les nouvelles technologies et les défis créatifs, je me suis lancé dans une reconversion professionnelle vers le développement web.
Déterminé, autonome et rigoureux, je suis aujourd'hui prêt à relever de nouveaux défis et à m'adapter rapidement aux besoins de votre entreprise.</p>
          <Link to='/about' className='button'>
          <span className='button__icon'><FaArrowRight /></span>Plus sur moi
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
      <div className="color__block1">
        {/* <Link to="/">
      <img src={Logo} alt="" className="logo" />
      </Link> */}
      </div>
    </section>
  )
}

export default Home