import React, { useContext ,useState } from 'react'
import "./register.css"
import { Link} from 'react-router-dom'
import { NewsContext } from '../../context/NewsContext';

function Register() {
 
  const newsContext = useContext(NewsContext);
  const {title } = newsContext;
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  

  const handleRegister = () => {
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    setUsername('');
    setPassword('');
  };
  
  return (
    <div className='mainOuter'>
      <div className="registerInner">
        <div className="right">
            <h1>Register</h1>
            <form action="submit" className="form">
                <input type="text" className="input" placeholder='Username' value={username}
            onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" className="input" placeholder='email' value={email}
                onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" className="input" placeholder='password' value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <button className="btn" onClick={handleRegister}><Link to='/login' className='link'>Register</Link></button>
        </div>
        <div className="left">
            <h1>Welcome to {title}</h1>
            <p>Explore the world in seconds </p>

            <span>Get a glance over the spot news updates!</span>
            <Link to='/login'><button className="btn">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Register
