import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import './styles/style.css';
import './styles/icons-font.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
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
                <Route path="/" element={<Home />}/>
                <Route path="/episode" element={<Episode />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/donate" element={<Donate />}/>
            </Routes>
        </Router>
    </>
);
