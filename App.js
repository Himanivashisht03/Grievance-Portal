import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Register from './components/Register';
import Track from './components/Track';
import All from './components/All';
import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const isAuth = Boolean(useSelector((state)=>state.token));
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
            <Route path="/Register" element={<Signup />}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path='/user/:id/' element={ isAuth? <Profile/> : <Navigate to='/Login'/>}></Route>
            <Route path='/user/:id/register' element={ isAuth? <Register/> : <Login/>}></Route>
            <Route path='/user/:id/track' element={isAuth? <Track/> : <Login/>}></Route>
            <Route path='/user/:id/all' element={isAuth? <All/> : <Login/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
