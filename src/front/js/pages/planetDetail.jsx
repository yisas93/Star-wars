import React, { useContext,useEffect, useState } from "react";
import {Context} from "../store/appContext.js";
import { useParams } from "react-router-dom";
import Cards from "../component/card.jsx";
import { CardDetail } from "../component/cardDetail.jsx";


export const PlanetDetail = ()=>{

    const { planetId }=useParams();
    const {store, actions} = useContext(Context)
    const [data, setData] = useState({})
  useEffect(()=>{
    actions.getStarwarsDetail("planets",planetId).then((resp)=> setData(resp))
  }, [])
    return(
        <div className="container">
            <h1>{data.name}</h1>
            <CardDetail
              
              
              type="planet"
              img={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
            />
      
            </div>
       
          
        
    );
};