import Link from "next/link"
export default function About() {
    return(
        <div className="w-full text-white border-b border-b-[#C7C7C7] lg:pt-[122px] pt-15 pb-10 lg:pb-[416px]">
            <div className="w-11/12 container mx-auto grid lg:grid-cols-2 ">
                <div className="hidden lg:block">
                    <h1 className="text-[68px] font-bold">ABOUT ME</h1>
                </div>
                <div className="flex flex-col gap-[14px] lg:gap-[16px] ">
                    <h1 className="hidden lg:block text-[28px] font-medium">I am a front-end developer based in Nigeria with a unique B.Sc in Accounting background, bringing analytical precision to my coding projects.  </h1>
                    <p className="text-[16px] lg:text-[18px]  font-normal text-[#C7C7C7]">I am a front-end developer based in Nigeria looking for exciting opportunities. My Accounting background gives me a unique perspective when building financial interfaces and data visualization tools. I focus intensely on accessibility when developing, ensuring inclusive experiences for all users. Passionate and curious about solving complex problems, particularly those involving financial data presentation and user interaction. Currently, I'm exploring ReactJS, TypeScript, and financial API integrations to create more dynamic applications. While I'm not programming, I enjoy analyzing market trends, participating in hackathons focused on fintech solutions, and playing chess. I'm continuously expanding my knowledge of both web development and financial systems to create more impactful digital experiences.</p>
                    <div className="flex pt-[22px] lg:pt-[53px]">
                    <Link href='/about' className="border-b border-b-[#D3E97A] text-[#D3E97A] font-bold items-center gap-2">MORE ABOUT ME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}