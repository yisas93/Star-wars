import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext.js"

 const Cards = (props) =>{
    /*
    id
    type
    title
    text
    img*/
    const{store, actions} =useContext(Context)

    function imgError(e) {
      console.error("Error:" + e.target.src);
      e.target.src = "https://www.actx.edu/images/404.jpg"
    }
   
    return(
        <div className="card" style={{width: "300px", height: "410px", backgroundColor: "black"}}>
  <img src={props.img} className="card-img-top" alt={props.type.toUpperCase()+ " " + props.title} onError={imgError} />
  <div className="card-body" style={{width: "300px", height: "80px"}}>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <Link to={`/${props.type}/${props.id}`} className="btn btn-primary">Details</Link>
    <button onClick={()=>actions.handleFavorites({
      name: props.title,
      link: `/${props.type}/${props.id}`,
    })} className="btn btn-outline-warning">favorite</button>
  </div>
</div>

    )
}
export default Cards