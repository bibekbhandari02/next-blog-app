import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const Header = () => {
  const [email, setEmail] = useState("");
  
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email)
    const response = await axios.post('/api/email', formData)
    if(response.data.success){
      toast.success(response.data.msg);
      setEmail("");
    }else{
      toast.error("Error")
    }
  }

  const scrollToSubscribe = () => {
    const emailInput = document.querySelector('input[type="email"]');
    emailInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      emailInput?.focus();
    }, 500);
  }
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="hidden sm:inline">Admin</span>
            </button>
          </Link>
          <button 
            onClick={scrollToSubscribe}
            className="hidden sm:flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:bg-gray-100"
          >
            Subscribe <Image src={assets.arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Discover insightful articles on technology, lifestyle, startups, and career development. 
          Stay updated with the latest trends and expert tips to enhance your personal and professional growth.
        </p>
        <form
        onSubmit={onSubmitHandler}
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button type="submit" className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
