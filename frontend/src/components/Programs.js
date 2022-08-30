import React from 'react'
import '../styles/Programs.css';
import {data3} from '../info/data3';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className='programs-header'>
            <span className='different-text'>Vivi la experiencia</span>
            <span className='different-text'>all inclusive</span>
            <span className='different-text'>todo el año</span>
        </div>

        <div className='program-categories'>
            {data3.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='reserve'><a href='../habitaciones'>Reserve ahora </a><ArrowRightAltIcon/></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
