import './App.css';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import './Pages/Common/Common.css'
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/order' element={<></>}></Route>
       <Route path='/products' element={<Products></Products>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
