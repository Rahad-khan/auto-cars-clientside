import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './component/Error/Error';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Reegister from './component/Register/Reegister';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Reegister/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
