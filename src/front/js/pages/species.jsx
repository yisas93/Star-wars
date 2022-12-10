import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Species =() =>{

    const {store, actions}= useContext(Context)

    return(
        <div className="container">
            <h1>Species</h1>
            <button className="btn btn-primary" onClick={()=>actions.getStarwars("species")} >Cargar Species</button>
                <ul>
                    {store.species.map(specie=>
                    <li>{specie.name}</li>)}
                </ul>

        </div>
    )


}
