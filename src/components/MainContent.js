import React from 'react'
import './MainContent.css'
import Kanban from '../assets/kanban.png'
// import {} from '@material-ui/icons'
// import { Input } from '@material-ui/core';


function MainContent() {
    return (
        <div className="container-mainContent">
            <img src={Kanban} className="image-mainContent"/>
            
        </div>
    )
}

export {MainContent}
