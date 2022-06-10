import './App.css';
import Navbar from './Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'  
import Footer from './Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectDetails from './Pages/Home/ProjectDetails';

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectDetails/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
