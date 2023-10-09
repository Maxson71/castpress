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
                <Route path="/castpress/" element={<Home />}/>
                <Route path="/castpress/episode" element={<Episode />}/>
                <Route path="/castpress/blog" element={<Blog />}/>
                <Route path="/castpress/contact" element={<Contact />}/>
                <Route path="/castpress/donate" element={<Donate />}/>
            </Routes>
        </Router>
        <Footer />
    </>
);
