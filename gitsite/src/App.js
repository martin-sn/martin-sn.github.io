import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import MasterFullPage from './pages/RProjects/MasterPage/MasterFullPage';

function App() {
  return (
    <>
    <div> 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/MastersThesis" element={<MasterFullPage />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
