import Image from "next/image"
import img from '../../image/IMG_7752 2.jpg'
import dot from '../../icon/circle.svg'
import dot1 from '../../icon/circle (2).svg'
import linkden  from '../../icon/Frame 3.svg'
import github  from '../../icon/Frame 4.svg'
export default function Hero() {
    return(
        <div className="w-full py-[80px] border-b border-b-[#C7C7C7]">
            <div className="w-11/12 container  py-[40px] mx-auto text-white grid lg:grid-cols-2 gap-[78px]">
                <div className="flex flex-col justify-center gap-[40px]">
                    <div>
                        <h1 className="lg:text-[49px] text-[32px] font-bold">HI, I AM <br/> OGUNLANA ABDULQUADRI .</h1>
                        <p className="text-[16px] lg:text-[18px] font-normal text-[#C7C7C7]">I'm a Nigeria-based front-end developer passionate about building accessible and user-friendly websites. With extensive experience in HTML, CSS, JavaScript, and React, I create seamless digital experiences that prioritize both functionality and aesthetics. I constantly seek to push the boundaries of what's possible in web development while ensuring my projects remain inclusive for all users.</p>
                    </div>
                    <div className="flex lg:gap-[16px] gap-[8px] ">
                       <button className="bg-[#D3E97A] flex items-center gap-3  py-[8px] px-[16px] lg:py-[16px] lg:px-[24px] rounded-full text-black text-[16px] font-bold">
                        CONTACT ME
                        <Image className="rounded-xl hidden lg:block"  alt="Logo" src={dot} />
                        <Image className="rounded-xl lg:hidden"  alt="Logo" src={dot1} />
                         </button>
                         <Image className="rounded-xl"  alt="Logo" src={linkden} />
                         <Image className="rounded-xl"  alt="Logo" src={github} />
                    </div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
<Image className="rounded-xl"  alt="Logo" src={img} />
<div className="absolute inset-0 bg-slate-600 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="count text-white animate-pulse  font-extrabold text-[78px] text-center px-4">
<p>WELCOME</p>
</div>
</div>
</div>
            </div>
        </div>
    )
}

