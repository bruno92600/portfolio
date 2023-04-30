import React from 'react'
import { stats } from '../data'
import parse from 'html-react-parser';

const Stats = () => {
  return (
    <>
    {stats.map(({no, title}, index) => {
        return(
            <div className="stats__box" key={index}>
                <p className="stats__title">{parse(title)}</p>
                <h3 className="stats__no">{parse(no)}</h3>
            </div>
        )
    })}
    </>
  )
}

export default Stats