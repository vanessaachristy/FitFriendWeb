import React from 'react'
import "./home.css"

const workoutData = [
    {id: 1, category: "Full Body", duration: "20 MINS", img: "assets/5103028.jpg", title: "Full Body Burn at Home for your Body and Mind"},
    {id: 2, category: "Full Body", duration: "30 MINS", img: "assets/5103028.jpg", title: "Half Body Burn at Home"},
    {id: 3, category: "Full Body", duration: "15 MINS", img: "assets/5103028.jpg", title: "Full Body Burn at Home"},
    {id: 3, category: "Full Body", duration: "15 MINS", img: "assets/5103028.jpg", title: "Full Body Burn at Home"},
    {id: 3, category: "Full Body", duration: "15 MINS", img: "assets/5103028.jpg", title: "Full Body Burn at Home"},

]

const testimonyData = [
    {id:1, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id est dolor. Sed sit amet massa sapien. Ut bibendum urna vel consectetur laoreet. Cras congue metus at tortor gravida convallis. In eros velit, ultricies non eros vitae, mollis lobortis tellus. In tincidunt nibh eget augue vehicula, at auctor justo volutpat. In hac habitasse platea dictumst. ", img: "assets/5103028.jpg", name: "nama", position: "uni student"},
    {id:1, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id est dolor. Sed sit amet massa sapien. Ut bibendum urna vel consectetur laoreet. Cras congue metus at tortor gravida convallis. In eros velit, ultricies non eros vitae, mollis lobortis tellus. In tincidunt nibh eget augue vehicula, at auctor justo volutpat. In hac habitasse platea dictumst. ", img: "assets/5103028.jpg", name: "nama", position: "uni student"},
]

export default function Home() {

  return (

    <div className="home">
        <div className="landingpage">
            <div className= "landingpage-container">
            <h1> YOUR #1 FIT LIFE PARTNER</h1>
            <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis odio laoreet, varius ex nec, dictum enim. </h2>
            <h3> JOIN US NOW</h3>
            </div>
            
        </div>
        <div className="programs">
            <h1>Professionally developed programs</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc quis odio laoreet, varius ex nec, dictum enim. </h2>
            <div className="programs-container">
                <div className="personaltraining"><h1>Personal Training</h1></div>
                <div className="grouptraining"><h1>Group Training</h1></div>
                <div className="mealplan"><h1>Meal Plan</h1></div>
            </div>

        </div>
        <div className="workout">
            <h1>Free Home Workout</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis odio laoreet, varius ex nec, dictum enim. </h2>
            <div className="workout-container">
            {workoutData.map((workout)=>(
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
            <div className="browsebutton">BROWSE MORE</div>
        </div>
        <div className="testimony">
            <h1>#FitFriendSays</h1>
            <div className="testimony-container">
                {testimonyData.map((testimony)=>(
                    <div className="testimony-block">
                        <div className="left">
                            <h1>"</h1>
                            <h2>{testimony.text}</h2>
                            <h1>"</h1>
                        </div>
                        <div className="right">
                            <img src={testimony.img}/>
                            <h2>{testimony.name}</h2>
                            <h3>{testimony.position}</h3>
                        </div>
                        </div>
                ))}
            </div>
        </div>
    </div>
  )
}
