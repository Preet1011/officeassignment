import {Routes,Route} from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';



import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import 'bootstrap/dist/css/bootstrap.css';
import Todolist from "./pages/Todolist";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
   <>
    <Routes>
    <Route path="/layout" element={<Layout/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/todolist" element={<Todolist/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      
     
    </Routes>
   
    </>
  );
} 

export default App;
