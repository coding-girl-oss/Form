import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const register = () => {
    const[Form, setForm] = useState({username: "", password: "", email: ""})
    const [err, setErr] = useState(false)
    const [log, setLog]= useState(false)
    const handleChange = (e)=>{
        setForm({...Form, [e.target.name]:e.target.value})
    }

    const handleClick = () =>{
       if(Form.username.length < 4 || Form.password.length <7 || Form.email.length < 5){
              setErr(true)
              setTimeout(() => {
                setErr(false)
              }, 2000);
       }else{
          console.log(Form)
          setLog(true)
          setTimeout(() => {
            setLog(false)
          }, 2000);
          setForm({username:"", password : "", email : ""})
       }
    }
  return (
    <>
    <div className='h-screen  flex justify-center items-center'>
         <div className='h-[400px] w-[350px] bg-gradient-to-b from-[#0c40ca] to-[#06216b] border-spacing-1 rounded-lg shadow-2xl'>
            <h1 className='text-[#aeccf2] text-5xl font-bold text-center my-8'>Register</h1>
            {err && <p className='text-sm font-bold text-red-500 mx-24 -my-5'>Credentials are invalid!</p>}
            {log && <p className='text-sm font-bold text-green-600 mx-24 -my-5'>Registered successfully!</p>}
            <div className='flex flex-col gap-5 my-8 mx-5'>
             <div className='relative'>
               <img className='absolute inset-y-0 left-0 flex items-center pl-64  my-2 h-6' src='https://cdn-icons-png.flaticon.com/128/456/456212.png' />
              <input onChange={handleChange}  type='text' placeholder='Username' name='username' value={Form.username} required className='w-[300px] py-2 px-3 rounded-full font-bold outline-none bg-[#aeccf2] bg-opacity-25 border-spacing-1 border-[#06216b]' />
              </div>
              <div className='relative'>
                <img className='absolute inset-y-0 left-0 flex items-center pl-64  my-2 h-6' src='https://cdn-icons-png.flaticon.com/128/542/542689.png'/>
              <input onChange={handleChange} type='text' placeholder='Email' name='email' value={Form.email} required className='w-[300px] py-2 px-3 rounded-full font-bold outline-none bg-[#aeccf2] bg-opacity-25 border-spacing-1 border-[#06216b]' />
              </div>
              <div className='relative'>
                <img className='absolute inset-y-0 left-0 flex items-center pl-64  my-2 h-6' src='https://cdn-icons-png.flaticon.com/128/3064/3064155.png'/>
              <input onChange={handleChange} type='password' placeholder='Password' name='password' value={Form.password}  required className='w-[300px] py-2 px-3 rounded-full font-bold outline-none bg-[#aeccf2] bg-opacity-25 border-spacing-1 border-[#06216b]' />
              </div>
            </div> 
           
              <div className='flex gap-1 mx-7 -my-6 text-[#aeccf2] text-sm'>
              <input type='checkbox' />
              <p>I agree to the terms and conditions.</p>
              </div>
             
            
            <div>
              <button onClick={handleClick} className='w-[300px] py-2 rounded-full bg-[#2e4da2] my-10 mx-5 text-white hover:bg-[#1440b9] transform hover:scale-105 font-bold hover:shadow-xl'>Register</button>
            </div>
           <div className='flex -my-8 mx-16 text-[#aeccf2] gap-1 text-sm'>
           <p className=''>Already have an account?</p>
           <Link className='underline underline-offset-1' to='/'>Login</Link>
           </div>
         </div>
      </div>
    </>
  )
}

export default register
