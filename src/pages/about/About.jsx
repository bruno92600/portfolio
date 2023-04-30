import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import CV from "../../assets/PascoalgoncalvesbrunoCV.pdf"
import Skills from '../../components/Skills'
import ResumeItem from '../../components/ResumeItem'
import { resume } from '../../data'
import { FaDownload } from "react-icons/fa"
import "./about.css"

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          Moi <span>.</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">
              Infos Personnels
            </h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download='' className="button">Télécharger mon Cv
            <span className='button__icon'><FaDownload /></span></a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">Mes 
compétences <span>.</span></h3>
         <div className="skills__container grid">
          <Skills />
         </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
      <h3 className="section__subtitle subtitle__center">Expériences professionnelles et Formations <span>.</span></h3>
      <div className="resume__container grid">
        <div className="resume__data">
          {resume.map((val) => {
            if (val.category === 'Expériences') {
              return (
                <ResumeItem key={val.id} {...val} />
          )}
          })}
        </div>
        <div className="resume__data">
          {resume.map((val) => {
            if (val.category === 'Formation diplômante') {
              return (
                <ResumeItem key={val.id} {...val} />
          )}
          })}
        </div>
      </div>
      </section>
    </main>
  )
}

export default About