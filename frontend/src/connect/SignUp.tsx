import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

interface SignUpProps {
  isDark: boolean;
}

export default function SignUp({ isDark }: SignUpProps) {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async() =>{
    try{
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      console.log('Sign Up successful:', response.data);
        const token  = response.data.token;
  if(token){
    localStorage.setItem('token', token);
  }

      navigate('/');
    }catch(error){
      console.error('Error during sign up:', error);
    }


  }


  return (
  <div className="h-screen w-screen flex justify-center items-center"
    style={{
      backgroundColor: isDark ? "#000" : "#fff"
    }}>
    <div className="rounded-3xl flex flex-col justify-center items-center p-16 gap-6"
      style={{
        border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`
      }} >
      <h2 className="text-4xl"
        style={{
          color: isDark ? "#fff" : "#000"
        }}>Sign Up</h2>
      <input className="w-80 px-2 py-2 rounded-full outline-none"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000"
        }} type="text" placeholder='Enter user name' onChange={(e)=> setUsername(e.target.value)} />
      <input className="w-80 px-2 py-2 rounded-full outline-none"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000"
        }} type="text" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)} />
      <input className="w-80 px-2 py-2 rounded-full outline-none"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000"
        }} type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}  />
      <button className="px-4 py-4 rounded-full cursor-pointer transition-all duration-200"
        style={{
          border: `1px solid ${isDark ? "#B3001B" : "#7EC8FF"}`,
          color: isDark ? "#fff" : "#000",
          backgroundColor: isDark ? "#000" : "#fff"
        }}
        onClick={handleSignUp}
        >Submit</button>
      <p style={{
        color: isDark ? "#fff" : "#000"
      }}> Already have an account?</p>
      <Link to="/login" className="no-underline hover:opacity-80 transition-opacity"
        style={{
          color: isDark ? "#B3001B" : "#7EC8FF"
        }}>Login</Link>
    </div>
    </div>
  )
}
