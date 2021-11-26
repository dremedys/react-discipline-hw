import './App.css';
import {useState} from "react";
import {Nav} from "./components/Nav/Nav";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Profile} from "./pages/Profile/Profile";
import {Home} from "./pages/Home/Home";
import {Login} from "./pages/Login/Login";
import {Friends} from "./pages/Friends/Friends";
import {FriendDetail} from "./components/FriendDetail/FriendDetail";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const correctUser = {username:'dremedys', password: 'qwerty'}

  const handleLogout = () => {
    setIsLogin(false)
  }

  const handleLogin = () => {
      setIsLogin(true)
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Nav isLogin={isLogin} handleLogout={handleLogout}/>
          <Routes>
              <Route exact path='/' element={<Home isLogin={isLogin}/>}/>}  />
              <Route exact path='/profile' element={<Profile isLogin={isLogin} user={correctUser}/>}  />
              <Route  path='/friends/' element={<Friends isLogin={isLogin}/>}>
                  <Route path='' element={<h1>Choose a friend!</h1>}/>
                  <Route path=':friendName' element={<FriendDetail/>}/>
              </Route>
              <Route exact path='/login' element={<Login correctUser={correctUser} setLoggedIn={handleLogin}/>}/>/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
