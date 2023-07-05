import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
 import {Routes ,Route} from 'react-router-dom'; 
import Product from './component/Product';
import { Form } from 'react-router-dom';
import Products from './component/Products';
// import Login from './component/Login';
import Registration from './component/Registration';
import ContactForm from './contact/ContactForm'; 
import Contact from './component/Contact';
 import Home2 from './loginform/Home2';
import Login from './loginform/Login';
import Signup from './loginform/Signup'; 
import About from './component/About';
function App() {
  return (
    <>
     <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/products' Component={Products} />
      <Route exact path='/products/:id' Component={Product} />
      {/* <Route extact path='/login' Component={Login}/> */}
      <Route extact path='/register' Component={Registration}/>
      <Route extact path='/contact' Component={Contact}/>
      <Route exact path='/about' Component={About} />
      <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={Home2}/>
    </Routes>
    </>
  );
}
// import { Form } from 'react-router-dom';

export default App;
