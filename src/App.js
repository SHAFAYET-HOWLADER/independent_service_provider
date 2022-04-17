import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='components_center'>
      <Header></Header>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <CheckOut/>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/service/:serviceId' element={<ServiceDetails/>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
