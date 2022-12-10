import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cards from "../component/card.jsx";


import { Context } from "../store/appContext";

export const Starships = () => {

	const{store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getStarwars("starships")},[])

	return (
		<div className="container">
			<h1>Starships</h1>
				<div className="container">
					<div className="row">
						{store.starships.map(starship=>(	
							<div key="index.uid" className="col">
								<Cards
								id={starship.uid}
								type="starship"
								title={starship.name}
								text="text"
								img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid }.jpg`}

								/>
							</div>
							
						))}
					</div>

				</div>
				
					

				
						
						
				
		</div>
	
	);
};
