import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText


} from 'reactstrap'

import './App.css'

import {FaEnvelope, FaMapMarkedAlt,FaPhoneAlt} from "react-icons/fa"

const MyCard = ({detail}) => {
    return (
        <div>
        <Card>
        <CardBody className="text-center">
        <img height="150" width="150"
        className="rounded-circle img-thumbnail border-success"
        src={detail.picture?.large}
        />
       
        
        <h5>
        {detail.gender}  </h5>
        <CardTitle className="text-center"> 
        <span className="pr-2">
        {detail.name?.title}:     
       </span>
        <span>
        {detail.name?.first}      
       </span>
        <span>
        {detail.name?.last}      
       </span>
        </CardTitle>
        <CardText>
        <FaMapMarkedAlt/>
        {detail.location?.city}
        </CardText>
        
        
       
        </CardBody>
        </Card>
        </div>
    )
}

export default MyCard
