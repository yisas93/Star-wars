import React, { useContext, useEffect } from "react"
import {Context} from "../store/appContext.js"


export const Characters = ()=>{

   const {store, actions} = useContext(Context)
   return(
       <div className="container">
         <h1>Characters</h1>
         <button className="btn btn-primary" onClick={()=>actions.getStarwars("people")}>Cargar Characters</button>
         <ul>
            {store.people.map(people=>
               <li>{people.name}</li>)}
         </ul>
         </div>
   );
    
};
