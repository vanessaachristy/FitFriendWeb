import React, {useState} from 'react'
import './programdropdown.css'
import {ProgramItems, WorkoutItems} from './ProgramItems'
import {Link} from 'react-router-dom'

export function ProgramDropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul onClick={handleClick} className={click ? 'program-dropdown clicked' : 'program-dropdown'}>
      {ProgramItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function WorkoutDropdown(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul onClick={handleClick} className={click ? 'program-dropdown clicked' : 'program-dropdown'}>
      {WorkoutItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}