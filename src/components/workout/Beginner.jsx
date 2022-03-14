import React from 'react'
import './beginner.css'
import { BeginnerData } from './WorkoutData'
import Dropdown from "react-bootstrap/Dropdown"

export default function Beginner() {
  return (
    <div className='beginner-page'>
        <div className='beginner-page-top'>
            <div className='sort'>
                <h3>SORT:</h3>
                <div className='sort-dropdown'>
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                    Reccomended
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#">
                        Reccommended
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Newest
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Oldest
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
            <h1> BEGINNER WORKOUT</h1>
        </div>
        <div className='beginner-page-item'>
        {BeginnerData.map((workout)=>(
                <div className="workout-block">
                    <div className="top-block">
                        <div className="category">{workout.category}</div>
                        <div className="duration">{workout.duration}</div>
                    </div>
                    <div className="workout-bottom-wrapper"><img src={workout.img} alt=""/>
                    <h3>{workout.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
