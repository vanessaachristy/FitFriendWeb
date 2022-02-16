import React from 'react'
import {Person, Search, ShoppingCart} from '@material-ui/icons/';
import "./navbar.css"

export default function Navbar() {
  return (
    <div className = "navbar">
        <div className="wrapper">
            <div className='left'>
                <a><div className="logo">
                    FitFriend
                </div></a>
            </div>
            <div className='center'>
                <a>HOME</a>
                <a>PROGRAMS</a>
                <a>WORKOUT</a>
                <a>BLOG</a>
                <a>SHOP</a>
                <a>ABOUT</a>
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
