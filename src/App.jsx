import React,{useState} from 'react'
import Card from './components/Card';

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [profileURL, setprofileURL] = useState("");
  const [discription, setdiscription] = useState("");

  const [data, setdata] = useState([]);
  const [formdata, setformdata] = useState({
    name:"",
    email:"",
    profileULR:"",
    discription:"",

  });

  const submitHandler=(e)=>{
    e.preventDefault();
   const newdata={name,email,profileURL,discription};
   setdata([...data,newdata])

    setname("")
    setemail("")
    setdiscription("")
    setprofileURL("")
  } 
  
 


  return (
    <div>
      <div className='p-5 flex flex-col items-center'>
        <h5 className='text-md font-bold'>Create User Profile</h5>
        <form onSubmit={submitHandler} className='flex flex-col w-55 gap-2 mt-3'>
          <input value={name} onInput={(e)=>setname(e.target.value)}  className='bg-neutral-300 px-2 py-1 rounded-md outline-none' type="text" placeholder='Enter your name' />
          <input value={email} onInput={(e)=>setemail(e.target.value)}  className='bg-neutral-300 px-2 py-1 rounded-md outline-none' type="text" placeholder='Enter your email' />
          <input value={profileURL} onInput={(e)=>setprofileURL(e.target.value)}  className='bg-neutral-300 px-2 py-1 rounded-md outline-none' type="text" placeholder='Enter your profile URL' />
          <input value={discription} onInput={(e)=>setdiscription(e.target.value)}  className='bg-neutral-300 px-2 py-1 rounded-md outline-none' type="text" placeholder='Enter the discription' />
          <button className='bg-neutral-300 px-2 py-1 rounded-md '>Submit</button>
        </form>
        
      </div >
      <div className='p-4 flex gap-5 flex-wrap'>
      {data.map((elem, itemidx)=>(
        <Card key={itemidx} data={elem}/>
      ))}
      </div>

      

    </div>
  )
}

export default App
