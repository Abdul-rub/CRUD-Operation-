
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import  Home  from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import {  Routes, Route, Router} from 'react-router-dom'
import NotFound from './Components/Pages/NotFound';
import AddUsers from './Components/Users/AddUsers';
import EditUsers from './Components/Users/EditUsers';
import ViewUsers from './Components/Users/ViewUsers';


function App() {
  return (
   
    <div className='App'>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  exact path="/about" element={<About/>}/>
        <Route  exact path="/contact" element={<Contact/>}/>
        <Route  element={<NotFound/>}/>
        <Route  exact path="users/add" element={<AddUsers/>}/>
        <Route  exact path="users/edit/:id" element={<EditUsers/>}/>
        <Route  exact path="users/view/:id" element={<ViewUsers/>}/>    
      </Routes>
      </div>
    
    
    
  );
}

export default App;
