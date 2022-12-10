import React, { useContext,useEffect } from "react";
import {Context} from "../store/appContext.js";
import Cards from "../component/card.jsx";


export const Planets = ()=>{


    const {store, actions} = useContext(Context)
    useEffect(()=>{
    actions.getStarwars("planets")},[])
    return(
        <div className="container">
            <h1 style={{color:"whitesmoke"}}>Planets</h1>
            <div className="container">
                <div className="row">
                     
                        {store.planets.map(planet=>(
                        <div key="index.uid" className="col" style={{border: "none", color: "white"}}>
                        <Cards
                        id={planet.uid}
                        type="planets"          
                        title={planet.name}
                        
                        img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid }.jpg`}
                        />
                        </div>
                       ))}
                     
                </div>
            </div>
        
            
                
        </div>
       
          
        
    );
};