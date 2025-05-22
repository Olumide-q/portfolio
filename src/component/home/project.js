import Image from "next/image"
import NRC from '../../image/24F12D7A-52E0-49CD-8808-85E9A10EF55C.jpeg'
import github from '../../icon/bxl-github.svg.svg'
import arrow from '../../icon/arrow.svg'
import tradexpress from '../../image/15CE8361-4692-4096-A720-FA86FD702297.jpeg'
import country from '../../image/668A085F-38D7-48D7-8EF8-F2FDEC8826BD.jpeg'
export default function Projects() {
    return(
        <div className="w-full text-white border-b border-b-[#C7C7C7]">
            <div className="w-11/12 container mx-auto pt-[40px] pb-[120px] flex flex-col gap-[120px]">
                <div className="lg:w-[47%] flex flex-col text-left pt-[40px] lg:py-[80px]">
                    <h1 className="lg:text-[49px] text-[32px]  font-bold">FEATURED PROJECTS</h1>
                    <p className="text-[16px] lg:text-[18px]  text-[#C7C7C7]">Here are some of the selected projects that showcase my passion for front-end development.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-[78px]">
                    <div className="bg-[#1A1A1A]  rounded-2xl ">
                      <div className=" hidden lg:block pt-[16px] pl-[16px]  lg:w-[28%]">
                      <p className="text-white bg-black py-[16px] px-[24px] text-center rounded-full">Conceptual Work</p>
                      </div>
                       <div className="lg:py-[73px] py-[43px] px-[56px] ">
                       <Image className="rounded-xl "  alt="Logo" src={NRC} />
                       </div>
                    </div>
                    <div className="flex flex-col gap-[32px] lg:py-[60px] py-[30px]">
                        <div className="flex flex-col gap-[32px]">
                            <h1 className=" lg:text-[32px] text-[24px] font-medium">Experience Nigeria's rail network reimagined with the official NRC app. </h1>
                            <p className="text-[16px] lg:text-[18px]  font-normal text-[#C7C7C7]">Teamed up with designers, backend developers, and fellow frontend specialists to breathe life into the NRC app, creating a seamless platform for booking tickets, tracking trains, and managing journeys directly from smartphones. Delivered a fully responsive design with dynamic content capabilities, implementing real-time seat availability updates and interactive booking interfaces that enhance the user experience. Optimized performance across devices while ensuring accessibility standards were met, resulting in a 40% increase in mobile bookings and overwhelmingly positive user feedback.</p>
                        </div>
                        <div className="p">
                            <p className="pb-[16px] border-b border-b-[#C7C7C7]">PROJECT INFO</p>
                            <div className="flex justify-between py-[16px] border-b border-b-[#C7C7C7]">
                                <p>YEAR</p>
                                <p>2025</p>
                            </div>
                            <div className="flex justify-between py-[16px] border-b border-b-[#C7C7C7]">
                                <p>Role</p>
                                <p>Front-end Developer</p>
                            </div>
                        </div>
                        <div className="flex gap-[24px] text-[#D3E97A] font-bold lg:text-[16px] text-[14px]">
                            <a href="https://nrc-gray.vercel.app/" className="border-b border-b-[#D3E97A] flex  items-center gap-2 ">
                            LIVE DEMO
                            <Image className="rounded-xl "  alt="Logo" src={arrow} />
                            </a>
                            <a href="https://github.com/gharneeyart/NRC.git" className="border-b border-b-[#D3E97A] flex  items-center gap-2 ">
                            SEE ON GITHUB
                            <Image className="rounded-xl "  alt="Logo" src={github} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-[78px]">
                    <div className="bg-[#1A1A1A]  rounded-2xl ">
                       <div className="lg:py-[127px] py-[43px] px-[56px] ">
                       <Image className="rounded-xl "  alt="Logo" src={tradexpress} />
                       </div>
                    </div>
                    <div className="flex flex-col gap-[32px] py-[60px]">
                        <div className="flex flex-col gap-[32px]">
                            <h1 className="lg:text-[28px] text-[24px] font-medium">Discover tradexpres - your all-in-one cryptocurrency platform for seamless buying, selling, and managing digital assets with confidence. </h1>
                            <p className="text-[16px] lg:text-[18px]  font-normal text-[#C7C7C7]">Teamed up with designers, backend developers, and fellow frontend specialists to breathe life into the tradexpress cryptocurrency platform, creating a seamless interface for buying, selling, and managing digital assets with intuitive user controls. Delivered a fully responsive design with dynamic market data visualization, implementing real-time price tracking and portfolio management features that enhance the trading experience. Optimized secure transaction flows and wallet integration while ensuring cross-device compatibility, resulting in a 35% increase in user retention and significant growth in trading volume across the platform.</p>
                        </div>
                        <div className="p">
                            <p className="pb-[16px] border-b border-b-[#C7C7C7]">PROJECT INFO</p>
                            <div className="flex justify-between py-[16px] border-b border-b-[#C7C7C7]">
                                <p>YEAR</p>
                                <p>2025</p>
                            </div>
                            <div className="flex justify-between py-[16px] border-b border-b-[#C7C7C7]">
                                <p>Role</p>
                                <p>Front-end Developer</p>
                            </div>
                        </div>
                        <div className="flex gap-[24px] text-[#D3E97A] font-bold  lg:text-[16px] text-[14px]">
                            <a href="https://projectassessment-o1t4.vercel.app/" className="border-b border-b-[#D3E97A] flex  items-center gap-2 ">
                            VIEW PROJECT
                            <Image className="rounded-xl "  alt="Logo" src={arrow} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-[78px]">
                    <div className="bg-[#1A1A1A]  rounded-2xl ">
                      <div className="pt-[16px] pl-[16px]  lg:w-[28%]">
                      <p className="hidden lg:block  text-white bg-black py-[16px] px-[24px] text-center rounded-full">Challenge</p>
                      </div>
                       <div className="lg:py-[73px] py-[43px]  px-[56px] ">
                       <Image className="rounded-xl "  alt="Logo" src={country} />
                       </div>
                    </div>
                    <div className="flex flex-col gap-[32px] py-[60px]">
                        <div className="flex flex-col gap-[32px]">
                            <h1 className="text-[28px] lg:text-[32px]font-medium">Introducing WorldInfo API – your comprehensive solution for accessing accurate global country data in seconds. </h1>
                            <p className="text-[16px] lg:text-[18px]  font-normal text-[#C7C7C7]">Successfully crafted an engaging country information dashboard featuring a dynamic flag display and intuitive search functionality, showcasing proficiency in geographic API integration. Implemented responsive country cards with organized population statistics, regional classifications, and capital city data, demonstrating strong front-end development skills. Delivered a clean, user-friendly interface with dark mode toggle capability that enhances accessibility while presenting comprehensive global information at a glance.</p>
                        </div>
                        <div className="p">
                            <p className="pb-[16px] border-b border-b-[#C7C7C7]">PROJECT INFO</p>
                            <div className="flex justify-between py-[16px] border-b border-b-[#C7C7C7]">
                                <p>YEAR</p>
                                <p>2025</p>
                            </div>
                            <div className="flex justify-between py-[16px] border-b border-b-[#C7C7C7]">
                                <p>Role</p>
                                <p>Front-end Developer</p>
                            </div>
                        </div>
                        <div className="flex gap-[24px] text-[#D3E97A] font-bold  lg:text-[16px] text-[14px]">
                            <a href="https://country-api-project-dusky.vercel.app/" className="border-b border-b-[#D3E97A] flex  items-center gap-2 ">
                            LIVE DEMO
                            <Image className="rounded-xl "  alt="Logo" src={arrow} />
                            </a>
                            <a href="https://github.com/Olumide-q/Country-Api-Project.git" className="border-b border-b-[#D3E97A] flex  items-center gap-2 ">
                            SEE ON GITHUB
                            <Image className="rounded-xl "  alt="Logo" src={github} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
