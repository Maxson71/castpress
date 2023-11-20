import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="https://Maxson71.github.io/castpress/">
        <App/>
    </BrowserRouter>
);