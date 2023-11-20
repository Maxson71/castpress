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
                <Route path="" element={<Home episodes={episodes} team={team} blogs={blogs} />} />
                <Route path="episode/:episodeId" element={<Episode episodes={episodes} />} />
                <Route path="blog" element={<Blog blogs={blogs} />} />
                <Route path="contact" element={<Contact team={team} />} />
                <Route path="donate" element={<Donate />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="about" element={<About team={team} />} />
                <Route path=":query" element={<Error error="page" />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;