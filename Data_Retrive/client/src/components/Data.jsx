import React, { useState } from 'react'

function Data() {

  const  [user , setUser] = useState({
    name : "",
    email : "",
    password : ""
  })

  let name , value ;

  const handleInputs = (e) => {
     name = e.target.name;
     value = e.target.value;

     setUser({...user,[name]:value})
  }
 

  const postData = async (e) => {
    e.preventDefault();

    const {name , email , password} = user

    
    try {
      const res = await fetch("http://localhost:2004/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.status !== 200) {
        window.alert(data.message || "Invalid data");
      } else {
        window.alert("Appointment successfully created");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred. Please try again later.");
    }

  }

  return (
    <>
    
    <>
    <div id="data" className='lg:flex lg:flex-col lg:gap-[30px] lg:justify-center lg:items-center'>

      <h1>ENTER YOUR DETAILS </h1>
      <form 
      method='POST'
      className='lg:flex lg:flex-col lg:gap-[30px] '>

        <input 
        type="text" 
        name="name" 
         value={user.name}
         onChange={handleInputs}
        placeholder='enter your name '
        className='h-[50px] bg-slate-300 w-[300px] border-2 border-black p-[20px]' />

        <input 
        type="email" 
        name="email" 
         value={user.email} 
         onChange={handleInputs}
        placeholder='enter your email'
        className='h-[50px] bg-slate-300 w-[300px] border-2 border-black p-[20px]'/>

        <input 
        type="password" 
        name="password" 
         value={user.password}
         onChange={handleInputs} 
        placeholder='enter your placeholder'
        className='h-[50px] bg-slate-300 w-[300px] border-2 border-black p-[20px]'/>


        <button 
        type="submit" 
        onSubmit={postData}>SUBMIT</button>
      </form>
    </div>
    </>
    </>
  )
}

export default Data
