
export default function Experience() {
    return(
        <div className="w-full text-white border-b border-b-[#C7C7C7] pt-[122px] pb-[80px]">
            <div className="w-11/12 container mx-auto grid lg:grid-cols-2 ">
                <div className="">
                    <h1 className="lg:text-[68px] text-[43px] font-medium lg:font-bold">MY EXPERIENCE</h1>
                </div>
                <div className="flex flex-col gap-[80px]">
                <div className="flex flex-col gap-[16px] ">
                   <div className="flex flex-col lg:flex-row justify-between">
                    <h2>Freelance Developer</h2>
                    <p className="text-[#C7C7C7]">Nov 2025 — Present </p>
                   </div>
                    <p className="text-[16px] lg:text-[18px]  font-normal text-[#C7C7C7]">Collaborated with diverse clients to deliver custom web solutions, specializing in responsive design and user-centric interfaces. Built dynamic applications using React, JavaScript, and modern CSS frameworks while maintaining strong focus on accessibility standards. Successfully managed multiple projects simultaneously, consistently meeting deadlines and exceeding client expectations through clear communication and technical expertise..</p>
                </div>
                <div className="flex flex-col gap-[16px] ">
                   <div className="flex flex-col lg:flex-row  justify-between">
                    <h2>Front-End Intern</h2>
                    <p className="text-[#C7C7C7]">Nov 2025 — Present </p>
                   </div>
                   <p className="text-[#D3E97A] font-semibold">Roos Tech</p>
                    <p className="text-[16px] lg:text-[18px]  font-normal text-[#C7C7C7]">Contributed to team projects by developing interactive UI components and implementing responsive design patterns across various client websites. Gained hands-on experience with version control systems, agile development practices, and cross-browser compatibility testing. Assisted senior developers in optimizing website performance and integrating third-party APIs, while learning industry best practices for clean, maintainable code.</p>
                </div>
                </div>
            </div>
        </div>
    )
}