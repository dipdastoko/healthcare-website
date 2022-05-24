import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Appointment from './pages/ProtectedRoutes/Appointment/Appointment';
import ServiceDetails from './pages/ProtectedRoutes/ServiceDetails/ServiceDetails';
import ViewDoctorDetails from './pages/ProtectedRoutes/ViewDoctorDetails/ViewDoctorDetails';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home></Home>} />
            <Route path='home' element={<Home></Home>} />
            <Route path='doctorDetails' element={<ViewDoctorDetails />} />
            <Route path='appointment' element={<Appointment />} />
            <Route path='serviceDetails' element={<ServiceDetails />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
