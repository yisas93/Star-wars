import propTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


export const CardDetail=(props)=>{
    return(
    <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
       <Link to="#" className="btn btn-primary">Go back </Link>
      </div>
    </div>
  </div>
</div>
    )
}