import * as React from "react";
import { Route, Routes } from 'react-router-dom'
import Comparison from "../Comparison/Comparison";
import Home from "../Home/Home";
import Matches from "../Matches/Matches";
import Medals from "../Medals/Medals";
import Overview from "../Overview/Overview";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/medals" element={<Medals />} />
                <Route path="/comparison" element={<Comparison />} />
            </Routes>
        </div>
    );
}
 
export default App;