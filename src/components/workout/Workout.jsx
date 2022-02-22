import React from 'react'
import "./workout.css"
import {BeginnerData, StrengthData, HIITData} from "./WorkoutData.jsx"
import {Link} from "react-router-dom";

export default function Workout() {
  return (
    <div className="workout-page">
      <div className='workout-landing'>
        <div className='workout-landing-container'>
      <h1>ONLINE WORKOUT FOR EVERYONE</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Nunc quis odio laoreet, varius ex nec, dictum enim. </h2>
      </div>
      </div>
      <div className='beginner'>
        <div className='beginner-top'>
          <h1>BEGINNER</h1>
          <Link to="/beginner"><h3>view all</h3></Link>
        </div>
        <div className='beginner-item'>
        {BeginnerData.slice(0,4).map((workout)=>(
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
      <div className='strength'>
        <div className='strength-top'>
            <h1>STRENGTH</h1>
            <h3>view all</h3>
          </div>
          <div className='beginner-item'>
          {BeginnerData.slice(0,4).map((workout)=>(
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
      <div className='hiit'>
        <div className='hiit-top'>
              <h1>HIIT</h1>
              <h3>view all</h3>
            </div>
            <div className='beginner-item'>
            {BeginnerData.slice(0,4).map((workout)=>(
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

    </div>
  )
}
