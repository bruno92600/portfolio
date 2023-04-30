import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Contactez <span>Moi .</span></h2>
      <div className="contact__container container grid">
        <div className="contact__data">
        <h3 className="contact__title">Allez-y <span>!</span></h3>
        <p className="contact__description">Je suis toujours prêt pour discuter de nouveaux projets, d'idées créatives ou simplement me partager votre vision .</p>
        <div className="contact__info">
          <div className="info__item">
            <FaEnvelopeOpen className='info__icon' />
            <div>
              <span className="info__title">Envoyez-moi un mail</span>
              <a href='mailto:pascoal.goncalves.bruno@gmail.com'><h4 className="info__desc">pascoal.goncalves.bruno@gmail.com</h4></a>
            </div>
          </div>
          <div className="info__item">
            <FaPhoneSquareAlt className='info__icon' />
            <div>
              <span className="info__title">Appelez-moi</span>
              <a href='tel:0649139979'><h4 className="info__desc">06 49 13 99 79</h4></a>
            </div>
          </div>
        </div>
        <div className="contact__socials">
          <a href="https://www.facebook.com" target="_blank" className="contact__social-link" >
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/bru2305/" target="_blank" className="contact__social-link">
            <FaInstagramSquare />
          </a>
          <a href="https://twitter.com/bruno9260" target="_blank" className="contact__social-link">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/bruno-pascoal-goncalves-082313222/" target="_blank" className="contact__social-link">
            <FaLinkedinIn />
          </a>
        </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
              type="text" 
              placeholder='Votre Nom'
              className="form__control" 
              />
            </div>
            <div className="form__input-div">
              <input 
              type="email" 
              placeholder='Votre Mail'
              className="form__control" 
              />
            </div>
            <div className="form__input-div">
              <input 
              type="text" 
              placeholder='Sujet de votre message'
              className="form__control" 
              />
            </div>
          </div>
          <div className="form__input-div">
              <textarea placeholder='Votre Message' className="form__control textarea"></textarea>
            </div>
            <button className="button">
              Envoyer
              <span className="button__icon contact__button-icon"><FiSend /></span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact