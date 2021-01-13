import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className="containerNavbar-navbar">

            <div className="leftNavbar-navbar">
                <p className="leftNavbarText-navbar">Salesrain</p>
            </div>

            <div className="rightNavbar-navbar">
                <div className="rightNavbarContent-navbar">
                <Router>
                    <Link className="zellikler">Özellikler</Link>
                    <Link className="Sektrler">Sektörler</Link>
                    <Link className="Fiyatlar">Fiyatlar</Link>
                    <Link className="Blog">Blog</Link>
                </Router>
                </div>

                <div className="rightNavbarContentButton-navbar">
                    <button className="button-navbar"><p className="buttonText-navbar">Giriş</p></button>
                    <button className="buttonBlue-navbar"><p className="buttonTextBlue-navbar">Kaydol</p></button>


                </div>


            </div>

            
        </div>
    )
}

export  {Navbar}
