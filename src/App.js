import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Home></Home>
      </AuthProvider>
    </div>
  );
}

export default App;
