
import Image from "next/image"
import dot from '../../icon/circle (1).svg'
import linkden  from '../../icon/Frame 3.svg'
import github  from '../../icon/Frame 4.svg'
import img from '../../image/image.svg'
export default function About() {
    return(
        <div className="w-full text-white pt-[122px] pb-[40px]">
            <div className="w-11/12 container mx-auto  ">
                <div className="grid lg:grid-cols-2 lg:gap-[78px] gap-[16px] pt-[80px] lg:pt-[160px] pb-[120px]">
                <div className="">
                    <h1 className="lg:text-[68px] text-[43px] font-medium lg:font-bold">ABOUT ME</h1>
                </div>
                <div className="flex flex-col gap-[16px] ">
                    <h1 className="lg:text-[28px] text-[24px] font-medium">I am a front-end developer based in Nigeria with a unique B.Sc in Accounting background, bringing analytical precision to my coding projects.  </h1>
                    <p className="text-[16px] lg:text-[18px] font-normal text-[#C7C7C7]">I am a front-end developer based in Nigeria looking for exciting opportunities. My Accounting background gives me a unique perspective when building financial interfaces and data visualization tools. I focus intensely on accessibility when developing, ensuring inclusive experiences for all users. Passionate and curious about solving complex problems, particularly those involving financial data presentation and user interaction. Currently, I'm exploring ReactJS, TypeScript, and financial API integrations to create more dynamic applications. While I'm not programming, I enjoy analyzing market trends, participating in hackathons focused on fintech solutions, and playing chess. I'm continuously expanding my knowledge of both web development and financial systems to create more impactful digital experiences.</p>
                    <div className="flex lg:gap-[16px] gap-[8px] pt-[48px]">
                                           <button className="bg-[#D3E97A]  flex gap-3 items-center py-[8px] px-[16px] lg:py-[16px] lg:px-[24px] rounded-full text-black lg:text-[16px] text-[12px] font-bold cursor-not-allowed">
                                            DOWNLOAD RESUME
                                            <Image className="rounded-xl"  alt="Logo" src={dot} />
                                             </button>
                                             <Image className="rounded-xl cursor-not-allowed "  alt="Logo" src={linkden} />
                                             <Image className="rounded-xl cursor-not-allowed"  alt="Logo" src={github} />
                                        </div>
                </div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
<Image className="rounded-xl w-full"  alt="Logo" src={img} />
<div className="absolute inset-0 bg-slate-300 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="head text-black animate-bounce font-extrabold text-[78px] text-center px-4">
<p>NO MORE ABOUT ME.</p>
</div>
</div>
</div>
            </div>
        </div>
    )
}
