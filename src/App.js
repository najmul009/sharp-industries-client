import './App.css';
import Header from './Pages/Common/Header';
import Home from './Pages/Home/Home';
import './Pages/Common/Common.css'
import { Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Order from './Pages/Products/Order';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/order/:id' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
