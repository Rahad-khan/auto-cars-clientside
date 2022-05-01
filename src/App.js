import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './component/Error/Error';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import ManageProduct from './component/ManageProduct/ManageProduct';
import Reegister from './component/Register/Reegister';
import RequireAuth from './component/RequireAuth/RequireAuth';
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Reegister />}></Route>
        <Route
          path="/inventory/:_id"
          element={
            <RequireAuth>
              <ManageProduct/>
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
