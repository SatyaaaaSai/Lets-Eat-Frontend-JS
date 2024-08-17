import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
