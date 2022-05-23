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
import DashBoard from './Pages/DashBoard/DashBoard';
import MyProfile from './Pages/DashBoard/MyProfile';
import AddReview from './Pages/DashBoard/AddReview';
import MyOrder from './Pages/DashBoard/MyOrder';
import ManageOrders from './Pages/DashBoard/Admin/ManageOrders';
import ManageProducts from './Pages/DashBoard/Admin/ManageProducts';
import ManageUsers from './Pages/DashBoard/Admin/ManageUsers';
import AddProduct from './Pages/DashBoard/Admin/AddProduct';

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

          {/* dashboard route  */}
          <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard> </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
            <Route path='/dashboard/manageorders' element={<ManageOrders></ManageOrders>}></Route>
            <Route path='/dashboard/manageproducts' element={<ManageProducts></ManageProducts>}></Route>
            <Route path='/dashboard/manageusers' element={<ManageUsers></ManageUsers>}></Route>
            <Route path='/dashboard/addproduct' element={<AddProduct></AddProduct>}></Route>
          </Route>
          {/* dashboard route  end*/}

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
