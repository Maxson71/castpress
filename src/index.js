import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import './styles/style.css';
import './styles/icons-font.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Episode from "./pages/Episode";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <Router>
            <Routes>
                <Route path={process.env.PUBLIC_URL+"/"} element={<Home />}/>
                <Route path={process.env.PUBLIC_URL+"/episode"} element={<Episode />}/>
                <Route path={process.env.PUBLIC_URL+"/blog"} element={<Blog />}/>
                <Route path={process.env.PUBLIC_URL+"/contact"} element={<Contact />}/>
                <Route path={process.env.PUBLIC_URL+"/donate"} element={<Donate />}/>
            </Routes>
        </Router>
        <Footer />
    </>
);