import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from './components/components/login/LoginPage';
// import Register from './components/components/Auth/Register';
import HomePage from './components/Header/Header';
import PensionCalculator from './components/components/PensionComponent/PensionComponent';


function App() {

    return (
        <Router>
        <Routes>
            {/* <Route path='/' element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/pensionpage" element={<PensionCalculator/>}/>
            {/* Add more routes as needed */}
        </Routes>
    </Router>
    
    )
}

export default App
