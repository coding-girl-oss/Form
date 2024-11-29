import {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
const [form, setForm]= useState({username: "", password: ""})
const [err, setErr] = useState(false)
const [log, setLog] = useState(false)

const handleChange = (e) =>{
  setForm({...form, [e.target.name]:e.target.value})
}
const handleSubmit = ()=> {
 
    if (form.username.length < 4 || form.password.length < 7){
        setErr(true)
        setTimeout(() => {
          setErr(false)
        },2000);
       
    }else{
       console.log(form)
       setForm('')
        setLog(true)
        setTimeout(() => {
          setLog(false)
        },2000);
        setForm({ username: '', password: '' })
    }
}
   
  return (
   <>
      <div className='h-screen  flex justify-center items-center'>
         <div className='h-[400px] w-[350px] bg-gradient-to-b from-[#0c40ca] to-[#06216b] border-spacing-1 rounded-lg shadow-2xl'>
            <h1 className='text-[#aeccf2] text-5xl font-bold text-center my-8'>Login</h1>
            {err && <p className='text-red-600 text-sm mx-24 -my-5 font-bold'>credentials are invalid!</p>}
            {log && <p className='text-green-700 text-sm mx-24 -my-5 font-bold'>Successfully logged!</p>}
            <div className='flex flex-col gap-5 my-8 mx-5'>
             <div className='relative'>
               <img className='absolute inset-y-0 left-0 flex items-center pl-64  my-2 h-6' src='https://cdn-icons-png.flaticon.com/128/456/456212.png' />
              <input onChange={handleChange} name='username' required value={form.username} type='text' placeholder='Username' className='w-[300px] py-2 px-3 rounded-full font-bold outline-none bg-[#aeccf2] bg-opacity-25 border-spacing-1 border-[#06216b]' />
              </div>
              <div className='relative'>
                <img className='absolute inset-y-0 left-0 flex items-center pl-64  my-2 h-6' src='https://cdn-icons-png.flaticon.com/128/3064/3064155.png'/>
              <input onChange={handleChange} name='password' required value={form.password} type='password' placeholder='Password' className='w-[300px] py-2 px-3 rounded-full font-bold outline-none bg-[#aeccf2] bg-opacity-25 border-spacing-1 border-[#06216b]' />
              </div>
            </div> 
            
            <div className='flex justify-between mx-4 -my-5 text-[#aeccf2] text-sm'>
              <div className='flex gap-1'>
              <input  type='checkbox' />
              <p>Remember me</p>
              </div>
              <p>Forgot password?</p>
            </div>
            <div>
              <button onClick={handleSubmit} className='w-[300px] py-2 rounded-full bg-[#2e4da2] my-10 mx-5 text-white hover:bg-[#1440b9] transform font-bold hover:scale-105 hover:shadow-xl'>Login</button>
            </div>
           <div className='flex -my-6 mx-16 text-[#aeccf2] gap-1 text-sm'>
           <p className=''>Don't have an account?</p>
            <Link className='underline underline-offset-1' to='/register'>Register</Link>
           </div>
         </div>
      </div>
   </>
  )
}

export default Login

