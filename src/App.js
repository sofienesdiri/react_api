
import './App.css';
import ListUsers from './Component/ListUsers'; 
import NavBarUser from './Component/NavBarUser';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import User from './Component/User';
function App() {
  return (
    <div className='App'>
      <NavBarUser/>
      
      <br/><br/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<ListUsers className="ListUser"/>}/>
        <Route path='/users/:id' element={<User/>}/>
        
        
      </Routes>
        
      
    </div>
  );
}

export default App;
