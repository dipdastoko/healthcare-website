import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Appointment from './pages/ProtectedRoutes/Appointment/Appointment';
import ServiceDetails from './pages/ProtectedRoutes/ServiceDetails/ServiceDetails';
import ViewDoctorDetails from './pages/ProtectedRoutes/ViewDoctorDetails/ViewDoctorDetails';
import SignUp from './pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>} />
            <Route path='home' element={<Home></Home>} />
            <Route path='doctorDetails/:doctorId' element={<PrivateRoute><ViewDoctorDetails /></PrivateRoute>} />
            <Route path='appointment/:doctorId' element={<PrivateRoute><Appointment /></PrivateRoute>} />
            <Route path='serviceDetails/:Id' element={<PrivateRoute><ServiceDetails /></PrivateRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='*' element={<NotFound></NotFound>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
