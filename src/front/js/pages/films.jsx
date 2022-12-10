import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Films =()=>{

    const{store, actions}=useContext(Context)
    return(
        <div className="container">
            <h1>Films</h1>
            <button className="btn btn-primary"onClick={()=>actions.getStarwars("films")}>Cargar films</button>
            <ul>
                {store.films.map(film=>
                  <li>{film.properties.title}</li> )}
            </ul>
        </div>
        )
}