import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='components_center'>
      <Header></Header>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
