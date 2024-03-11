import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from "./pages/HomePage";

function App() {
  const { token } = useSelector((state) => state.auth);
  if(token){
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;