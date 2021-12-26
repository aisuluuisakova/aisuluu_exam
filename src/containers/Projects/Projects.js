import React from 'react'
import './Projects.css'
import {ProjectItems} from './ProjectItems'

export default function Projects() {
    return (
        <div className="projects-block">
            <h1> Наш ассортимент одежды</h1>
            <ul>
                {ProjectItems.map((item, index)=>{
                  return(
                      <li style={{display: 'flex', justifyContent: 'space-between'}} className="objects" key={index}>
                          <ul classname="name">{item.name}  </ul>
                          <ul classname="description">{item.description}  </ul> 
                          <ul classname="image"><img src={item.image}></img> </ul>  
                          <ul classname="date">{item.created_date}  </ul> 
                      </li>
                  )  
                })}
            </ul>
        </div>
    )
}
