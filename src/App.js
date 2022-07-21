import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import RequireAuth from './pages/Authentication/RequireAuth';
import Blogs from './pages/Blogs/Blogs';
import Portfolio from './pages/Portfolio/Portfolio';

import { ToastContainer } from 'react-toastify';

import AddReview from './pages/AddReview/AddReview';
import Dashboard from './pages/DashBoard/DashBoard';
import MyOrders from './pages/DashBoard/MyOrders';
import MyProfile from './pages/DashBoard/MyProfile';
import Users from './pages/DashBoard/Users';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='myProfile' element={<MyProfile />}></Route>
          <Route path='users' element={<Users />}></Route>

        </Route>

      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
