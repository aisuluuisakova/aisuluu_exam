import React, {useState}  from 'react'
import './Projects.css'
import {ProjectItems} from './ProjectItems'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import img1 from './images/zara.JPG'
// import img2 from './images/hm.JPG'
// import img3 from './images/Bershka.jpg'
// import img4 from './images/lacoste.JPG'

import InputComponent from '../../components/InputComponent/InputComponent'

export default function Projects() {
    const [search, setSearch]= useState('')
    
    const handleInput=(event)=>{
        setSearch(event.target.value)
    }
    return (
        <div className="projects-block">
            <h1> Наш ассортимент одежды</h1>
            <Row>
                          <Col sm={2}><InputComponent placeholder="Search" value={search} onChange={handleInput}/></Col>
                      </Row>
            <ul>
                {ProjectItems.map((item, index)=>{
                  return(
                      <>
                      
                      <Row className="objects" key={index}>
                          <Col sm={2}>{item.name}</Col>
                          <Col sm={4}>{item.description}</Col>
                          <Col sm={4}><img className="d-block w-100 h-70 d-block" src={item.image} alt="images"/></Col>
                          <Col sm={2}>{item.created_date}</Col>
                      </Row>
                      </>
                  )  
                })}
            </ul>
        </div>
    )
}
