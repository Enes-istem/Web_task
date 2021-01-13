import React from 'react'
import './Footer.css'
import Yerli from '../assets/yerli-u-retim-logosu.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Google from '../assets/google-play-badge.png'
import Apple from '../assets/download-on-the-app-store-badge-dk-blk-100217.png'
import Facebook from '../assets/path.png'
import Twitter from '../assets/path_2.png'

import Youtube from '../assets/youtube-1.png'


function Footer() {
    return (
        <div className="container-Footer">

            <div className="content-Footer">
                <h2>Salesrain</h2>
                <p>SalesRain ile ekibiniz artık AI tabanlı müşteri adayı puanlama, telefon, e-posta, etkinlik yakalama ve daha fazlasını kullanabilir.</p>
                <img src = {Yerli} style = {{objectFit: 'contain', alignSelf: 'flex-start'}}/>
            </div>

            <div className="content-Footer">
                <h2>SalesRain</h2>
                <Router>
                    <Link className="link-footer">Hakkında</Link>
                    <Link className="link-footer">Fiyatlandırma</Link>
                    <Link className="link-footer">Marka</Link>
                    <Link className="link-footer">İnsan Kaynakları</Link>
                    <Link className="link-footer">Blog</Link>
                    <Link className="link-footer">Haberler</Link>

                </Router>
            </div>

            <div className="content-Footer">
            <h2>Ürün</h2>
            <Router>
                    <Link className="link-footer">Özellikleri</Link>
                    <Link className="link-footer">Sektörler</Link>
                    <Link className="link-footer">Pazaryeri</Link>

                </Router>
            </div>

            <div className="content-Footer">
            <h2>Geliştirici</h2>
            <Router>
                    <Link className="link-footer">Dökümanlar</Link>
                    <Link className="link-footer">API Referanslar</Link>
                    <Link className="link-footer">Dev Topluluk</Link>
                    <Link className="link-footer">Durum</Link>


                </Router>
            </div>

            <div className="content-Footer">
            <h2>Yardım</h2>
            <Router>
                    <Link className="link-footer">Yardım Merkezi</Link>
                    <Link className="link-footer">Akademi</Link>
                    <Link className="link-footer">Destek</Link>

                </Router>
            </div>

            <div className="imageContainer-footer">
                <div className="imageContent-footer">
                    <img src= {Google} />
                </div>
                <div className="imageContent-footer">
                <img src= {Apple} />
                </div>
                <div className="imageContentIcon-footer">
                <img src= {Facebook} className="imageContentImage-footer"/>
                <img src= {Twitter} className="imageContentImage-footer"/>
                <img src= {Youtube} className="imageContentImage-footer"/>
                <img src= {Facebook} className="imageContentImage-footer"/>
                <img src= {Facebook} className="imageContentImage-footer"/>

                </div>




            </div>


            
        </div>
    )
}

export {Footer}
