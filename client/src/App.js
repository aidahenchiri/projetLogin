import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Login  from './Component/Login';
import  Register  from './Component/Register';
import  Home  from './Component/Home';
import  Profile  from './Component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Component/Loading';
import { useSelector } from 'react-redux';



function App() {
  const load=useSelector((state)=>state.userReducer.load  )

  return (
    <div className="App">

<Routes>
<Route path="/" element={<Home />}/> 

<Route path="/Profile"  element={load?<Loading />:<Profile /> }/> 
<Route path="/Login" element={<Login />}/> 
 <Route path="/Register" element={<Register />}/>
</Routes>
    </div>
  );
}

export default App;
