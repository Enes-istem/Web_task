import React from 'react';
import './Logo.css'
import { MiddleContent } from '../components'
import Logos from '../assets/group-8@3x.png'

function Logo() {
    return (
        
    <div className="main-logo">
        <div className="containers-logo">
            <div className="first-logo">
                <h1>Satış sürecinin daha iyi bir CRM'e ihtiyacı var</h1>
            </div>
            <div className="second-logo">
                <p>SalesRain ile ekibiniz artık AI tabanlı müşteri adayı puanlama, telefon, e-posta, etkinlik yakalama ve daha fazlasını kullanabilir.</p>
            </div>
            <div className="third-logo">
                <p className="thirdText-logo">Ücretsiz Deneyin</p>
            </div>

            <img src= {Logos} className="image-logo"/>

            
        </div>
    </div>
            
        
    )
}

export {Logo}
