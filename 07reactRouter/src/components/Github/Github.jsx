import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const [data, setData]=useState({})

    fetch('https://api.github.com/users/vishaljati')
    .then((res)=>res.json())
    .then((data)=>setData(data))

    console.log(data);
    
  return (
    <div className='bg-gray-500'>
      <img src={data.avatar_url} alt="Github Pic" />
      <h1 className='text-5xl'>Name : {data.name}</h1>
      <h2>bio: {data.bio}</h2>
      <br />
      <h2>Follower:{data.followers}</h2>
      
    </div>
  )
}

export default Github

export const GithubLoader =async()=>{
  const response=  await fetch("https://api.github.com/users/vishaljati")
  return response.json()
}

