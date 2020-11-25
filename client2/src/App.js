import "./App.css";
import { LandingPage } from "./Components/Views/LandingPage";
import { Router } from "@reach/router";

function App() {
    return (
        <div className="App">
            <Router>
                <LandingPage path="/" />
            </Router>
        </div>
    );
}

export default App;
