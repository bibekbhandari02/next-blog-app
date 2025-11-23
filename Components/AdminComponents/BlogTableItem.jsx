import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {
    const BlogDate = new Date(date);
    
    const westernNames = [
        "John Smith", "Emma Johnson", "Michael Brown", "Sarah Davis", 
        "James Wilson", "Emily Martinez", "David Anderson", "Olivia Taylor",
        "Robert Thomas", "Sophia Moore", "William Jackson", "Isabella White",
        "Christopher Harris", "Mia Martin", "Daniel Thompson"
    ];
    
    const randomName = westernNames[Math.floor(Math.random() * westernNames.length)];
    
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <p>{randomName}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default BlogTableItem