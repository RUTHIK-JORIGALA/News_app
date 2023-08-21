import React, { useContext , useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./login.css"
import { NewsContext } from '../../context/NewsContext'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const newsContext = useContext(NewsContext);
  const {handleLogIn , title } = newsContext;
  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      handleLogIn();
      navigate('/home')
      
    } else {
      alert('Invalid credentials');
    }
    setUsername('');
    setPassword('');
  };

  // const authLogin = () =>{
  //   if(JSON.parse(userData).email === email.current.value  &&
  //    JSON.parse(userData).password === password.current.value){
  //     handleLogIn();
  //    }else{
  //     alert("incorrect email or password");
  //    }
  // }
  // console.log(userData ,"from login")
  return (
    <div className='loginOuter'>
      <div className="loginInner">
        <div className="left">
            <h1>Welcome to {title}</h1>
            <p>Explore the worlds in seconds</p>
            <span>Get a glance over the spot news updates!</span>
            <Link to='/register'><button className="btn">Register</button></Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="submit" className="form">
                <input type="text" className="input" placeholder='username' value={username}
            onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="input" placeholder='password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <button className="btn" onClick={handleLogin}><Link to='/' className='link' >Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Login
