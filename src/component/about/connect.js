'use client';
import Link from "next/link";
import Image from "next/image";
import github from '../../icon/bxl-github.svg.svg'
import linkdeln from '../../icon/bxl-linkedin.svg (2).svg'
import twitter from '../../icon/bxl-linkedin.svg (1).svg'
import insta from '../../icon/bxl-instagram.svg.svg'
import { useForm } from 'react-hook-form';
import { useState } from 'react';


export default function Connect() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const [loading, setLoading] = useState(false);
      const onSubmit = async (data) => {
        console.log(data);
        setLoading(true);
    
        try {
          // Replace with your Formspree endpoint
          const response = await fetch('https://formspree.io/f/xpwdereo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const resData = await response.json();
      console.log(resData);
    
          if (resData.detail === "Account successful") {
            reset();
          } else {
            throw new Error('Failed to send message');
          }
        } catch (error) {
          
        } finally {
          setLoading(false);
        }
      };
    

    
    return(
       <div className="w-full text-white">
                   <div  className="w-11/12 container mx-auto grid lg:grid-cols-2 pt-[55px]">
                   <div className=" ">
                       <h1 className="lg:text-[68px] text-[43px] font-medium lg:font-bold">LET’S CONNECT</h1>
                       <div className="pt-[40px]">
                       <p className="text-[#C7C7C7]">Say hello at <span className="border-b border-b-[#D3E97A] text-white ">ogunlanamide@gmail.com</span></p>
                       <p className="text-[#C7C7C7]">For more info, here’s my <span className="border-b border-b-[#D3E97A] text-white  ">resume</span></p>
                       </div>
                       <div className="flex gap-4 pt-[40px] pb-[64px] lg:pb-[290px]">
                           <Image className="rounded-xl "  alt="Logo" src={linkdeln} />
                           <Image className="rounded-xl "  alt="Logo" src={github} />
                           <Image className="rounded-xl "  alt="Logo" src={twitter} />
                           <Image className="rounded-xl "  alt="Logo" src={insta} />
                       </div>
                       <div className="hidden lg:block" >
                           <p>© 2023 Ogunlana Olumide</p>
                       </div>
                   </div>
                   <div>
                   <form onSubmit={handleSubmit(onSubmit)}
                   className="flex flex-col gap-[24px]">
           <div>
          <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-[#C7C7C7]">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            id="name"
            type="text"
            className="text-white bg-[#1A1A1A] rounded-lg px-3 py-4 focus:outline-none"
          />
        </div>
        {errors.name && (
          <span className="text-slate-500 text-sm">{errors.name.message}</span>
        )}
    </div>
    <div>
          <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-[#C7C7C7]">
            Email
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            id="email"
            type="email"
            className=" bg-[#1A1A1A] rounded-lg px-3 py-4 focus:outline-none  text-white"
          />
        </div>
        {errors.email && (
          <span className="text-slate-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div>
         <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 font-medium text-[#C7C7C7]">
            Subject
          </label>
          <input
            {...register('subject', { required: 'Subject is required' })}
            id="subject"
            type="text"
            className=" bg-[#1A1A1A] rounded-lg px-3 py-4 focus:outline-none  text-white"
          />
        </div>
        {errors.subject && (
          <span className="text-slate-500 text-sm">{errors.subject.message}</span>
        )}
       </div>
       <div>
  <div className="flex flex-col">
    <label htmlFor="message" className="mb-1 font-medium text-[#C7C7C7]">
      Message
    </label>
    <textarea
      {...register('message', { required: 'Message is required' })}
      id="message"
      rows="4"
      className=" bg-[#1A1A1A] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 text-white focus:ring-blue-500 resize-none"
    ></textarea>
  </div>
  {errors.message && (
    <span className="text-slate-500 text-sm">{errors.message.message}</span>
  )}
</div>
<div>
          <button
  type="submit"
  disabled={loading}
  className={`bg-[#D3E97A] text-black px-10 py-4 rounded-full transition font-semibold mt-4 ${
    loading? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
  }`}
>
  {loading ? 'Sending...' : 'SUBMIT'}
</button>
        </div>
         </form>
               <div className="lg:hidden pt-[80px]" >
                           <p>© 2023 Ogunlana Olumide</p>
                       </div>
                   </div>
                   </div>
               </div>
    )
}


