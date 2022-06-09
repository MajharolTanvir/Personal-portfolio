import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'  

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
