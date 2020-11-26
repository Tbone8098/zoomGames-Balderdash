import "./App.css";
import { LandingPage } from "./Components/Views/LandingPage";
import { Router } from "@reach/router";
import { Dashboard } from "./Components/Views/Dashboard";

function App() {
    return (
        <div className="App">
            <Router>
                <LandingPage path="/" />
                <Dashboard path="/dashboard" />
            </Router>
        </div>
    );
}

export default App;
