import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';
import Appointment from './pages/ProtectedRoutes/Appointment/Appointment';
import ViewDoctorDetails from './pages/ProtectedRoutes/ViewDoctorDetails/ViewDoctorDetails';

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
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
