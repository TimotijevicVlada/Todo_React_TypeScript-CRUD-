import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/App.css';
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import MotivationalMessage from "./components/MotivationalMessage";
import Footer from "./components/Footer";

const App: React.FC = () => {



  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="motivate" element={<MotivationalMessage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
