import './App.css';
import { AppProvider } from './Components/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderDetailsPage from './Pages/OrderDetailsPage/OrderDetailsPage';
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/OrderDetailsPage" element={<OrderDetailsPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
