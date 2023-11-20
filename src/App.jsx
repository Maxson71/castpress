import './styles/reset.css';
import './styles/style.css';
import './styles/icons-font.css';

import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Episode from "./pages/Episode";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Error from "./pages/Error";

import episodes from "./assets/data/episodes.json";
import team from "./assets/data/team.json";
import blogs from "./assets/data/blogs.json";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={process.env.PUBLIC_URL + "/"} element={<Home episodes={episodes} team={team} blogs={blogs}/>}/>
                <Route path={process.env.PUBLIC_URL + "/episode/:episodeId"} element={<Episode episodes={episodes}/>}/>
                <Route path={process.env.PUBLIC_URL + "/blog"} element={<Blog blogs={blogs}/>}/>
                <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact team={team}/>}/>
                <Route path={process.env.PUBLIC_URL + "/donate"} element={<Donate/>}/>
                <Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy/>}/>
                <Route path={process.env.PUBLIC_URL + "/about"} element={<About team={team}/>}/>
                <Route path=":query" element={<Error error={"page"}/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;