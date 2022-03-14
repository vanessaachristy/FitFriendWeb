import React, {useState} from 'react'
import {Person, Search, ShoppingCart} from '@material-ui/icons/';
import "./navbar.css"
import "./programdropdown.css"
import {Link} from 'react-router-dom'
import {ProgramDropdown, WorkoutDropdown} from './ProgramDropdown';



export default function Navbar() {

    const [dropdown, setDropdown] = useState(false);


    const onMouseEnter = () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    };


  return (
    <div className = "navbar">
        <div className="wrapper">
            <div className='left'>
                <a href="/home"><div className="logo">
                    FitFriend
                </div></a>
            </div>
            <div className='center'>

                <div className="center-item">
                <Link to="/home">
                    <a>HOME</a>
                </Link>
                </div>

                <div className="center-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to="/personal-training">
                    <a>PROGRAMS</a>
                    {dropdown && <ProgramDropdown/>}
                    </Link>
                   
                </div>

                <div className="center-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to="/workout">
                    <a>WORKOUT</a>
                    {dropdown && <WorkoutDropdown/>}
                </Link>
                </div>

                <div className="center-item">
                <Link to="/blog">
                    <a>BLOG</a>
                </Link>
                </div>
                
                <div className="center-item">
                <Link to="/shop">
                    <a>SHOP</a>
                </Link>
                </div>
                
                <div className="center-item">
                <Link to="/about">
                    <a>ABOUT</a>
                </Link>
                </div>
                
            </div>
            <div className='right'>
                <a><Person className="icon"/></a>
                <a><Search className='icon'/></a>
                <a><ShoppingCart className='icon'/></a>
            </div>
        </div>
    </div>

  )
}
