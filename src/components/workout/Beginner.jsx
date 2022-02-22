import React from 'react'
import './beginner.css'
import { BeginnerData } from './WorkoutData'

export default function Beginner() {
  return (
    <div className='beginner-page'>
        <div className='beginner-page-top'>
            <div className='sort'>
                <h3>SORT:</h3>
                <div className='sort-dropdown'>
                    Hello
                </div>
            </div>
            <h1> BEGINNER WORKOUT</h1>
        </div>
        <div className='beginner-page-item'>
        {BeginnerData.slice(0,8).map((workout)=>(
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
