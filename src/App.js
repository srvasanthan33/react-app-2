import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Routes/Calculator/Calculator";
import RickMorty from "./components/Routes/RickMorty/RickMorty";
import HomeComponent from "./components/Routes/Home/HomeComponent";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="section">
                    <h2>App</h2>
                    <ul className="nav">
                        <li>
                            <Link to="/">Home </Link>
                        </li>
                        <li>
                            <Link to="/Calculator">Calculator </Link>
                        </li>

                        <li>
                            <Link to="/RickMorty"> RickMorty </Link>
                        </li>
                    </ul>
                </div>
                <div id="route-element">
                    <Routes>
                        <Route exact path="/" element={<HomeComponent />}>
                            {" "}
                        </Route>
                        <Route exact path="/Calculator" element={<Calculator />}>
                            {" "}
                        </Route>
                        <Route exact path="/RickMorty" element={<RickMorty />}>
                            {" "}
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
