"use client"
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

export default function page()  {
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const data = {
    title : title,
    content : content 
  }

  return (
    <div className="flex flex-col p-5 items-center justify-center mt-32">
      <div className="bg-[#0a0a0a] p-5 border-[0.5px] border-gray-700 rounded-lg w-1/2 flex flex-col gap-5 text-gray-400">
      <h2 className="text-[#fafafa] text-xl font-bold flex items-center gap-2"><CreateIcon/> Post a confession </h2>
      <hr className="opacity-25" />
      <div className="">
        <div className='flex'><h2 className="text-[#fafafa]">Title:</h2></div>
        <input placeholder="Enter title here" className="bg-[#0a0a0a] px-5 py-2 rounded-md w-full border-gray-700 border-[0.5px]" onChange={(e)=>{setTitle(e.target.value)}} />
      </div>
      <div className="">
        <h2 className="text-[#fafafa]">Content:</h2>
        <textarea placeholder="Enter the content here" className="bg-[#0a0a0a] px-5 py-2 rounded-md w-full h-[100px] border-gray-700 border-[0.5px]" onChange={(e)=>{setContent(e.target.value)}}/>
      </div>
        <button className='text-white bg-red-500 px-3 py-1 rounded-sm ' onClick={()=>{console.log(data)}}>Post !</button>
      </div>
    </div>
  )
}
