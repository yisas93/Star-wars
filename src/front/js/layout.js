import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "./pages/styles.css"

import { Home } from "./pages/home.jsx";
import { Films } from "./pages/films.jsx"
import { Species } from "./pages/species.jsx";
import { Starships } from "./pages/starships.jsx";
import { Single } from "./pages/single.jsx";
import { Planets } from "./pages/planets.jsx"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import { Characters } from "./pages/characters.jsx";
import { PlanetDetail } from "./pages/planetDetail.jsx"

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div className="stars" >
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Characters/>} path="/characters"/>
                        <Route element={<Home />} path="/" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Planets />} path="/planets"  />
                        <Route element={<PlanetDetail />} path="/planets/:planetId"  />
                        <Route element={<Species />} path="/species" />
                        <Route element={<Films />} path="/films"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
