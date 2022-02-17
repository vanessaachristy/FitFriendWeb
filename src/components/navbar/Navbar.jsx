import React, {useState} from 'react'
import {Person, Search, ShoppingCart} from '@material-ui/icons/';
import "./navbar.css"
import "./programdropdown.css"
import {Link} from 'react-router-dom'
import ProgramDropdown from './ProgramDropdown';


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
                <a><div className="logo">
                    FitFriend
                </div></a>
            </div>
            <div className='center'>
                <Link to="/home">
                    <a>HOME</a>
                </Link>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to="/personal-training" className="programs-dropdown">
                    <a>PROGRAMS</a>
                    </Link>
                </div>
                <Link to="/workout">
                    <a>WORKOUT</a>
                </Link>
                <Link to="/blog">
                    <a>BLOG</a>
                </Link>
                <Link to="/shop">
                    <a>SHOP</a>
                </Link>
                <Link to="/about">
                    <a>ABOUT</a>
                </Link>
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
