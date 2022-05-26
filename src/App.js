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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyProfile from './Pages/DashBoard/MyProfile';
import AddReview from './Pages/DashBoard/AddReview';
import MyOrder from './Pages/DashBoard/MyOrder';
import ManageOrders from './Pages/DashBoard/Admin/ManageOrders';
import ManageProducts from './Pages/DashBoard/Admin/ManageProducts';
import ManageUsers from './Pages/DashBoard/Admin/ManageUsers';
import AddProduct from './Pages/DashBoard/Admin/AddProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import NotFound from './Pages/Common/NotFound';
import Payment from './Pages/Payment/Payment';
import PortFolio from './Pages/PortFilio/PortFolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/protfolio' element={<PortFolio></PortFolio>}></Route>
        <Route path='/order/:id' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>}></Route>


        {/* dashboard route  */}
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard> </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/myorder' element={<MyOrder></MyOrder>}></Route>
          <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/manageorders' element={<RequireAdmin> <ManageOrders></ManageOrders> </RequireAdmin>}></Route>
          <Route path='/dashboard/manageproducts' element={<RequireAdmin> <ManageProducts></ManageProducts> </RequireAdmin>}></Route>
          <Route path='/dashboard/manageusers' element={<RequireAdmin> <ManageUsers></ManageUsers> </RequireAdmin>}></Route>
          <Route path='/dashboard/addproduct' element={<RequireAdmin> <AddProduct></AddProduct> </RequireAdmin>}></Route>
        </Route>
        {/* dashboard route  end*/}
        <Route path='/payment/:id' element={<RequireAuth> <Payment></Payment> </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
