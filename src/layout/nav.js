"use client"
import { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const closeMenubar = () => setMenuOpen(false);
    const openMenubar = () => setMenuOpen(!menuOpen);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            closeMenubar();
        }
    };

    // Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setMenuOpen(false);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <div className='fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm'>
            <div className="w-full text-[#C7C7C7]" ref={navRef}>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex w-11/12 container mx-auto items-center py-[24px] px-2 justify-between">
                    <div>
                       <Link href='/'> <h1 className="text-[32px] font-normal over:text-white transition-colors cursor-pointer">OGUNLANA ABDULQUADRI</h1></Link>
                    </div>
                    <div className="font-medium text-[16px] flex gap-[32px]">
                        <p
                          className="hover:text-white transition-colors cursor-not-allowed">
                            Work
                        </p>
                        <Link href='/about' className="hover:text-white transition-colors cursor-pointer">
                            About
                        </Link>
                        <p  className="hover:text-white transition-colors cursor-not-allowed">
                            Contact
                        </p>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden flex items-center justify-between w-full py-[24px] px-2  ">
                    <div>
                        <Link href='/'><h1 className="text-[24px] sm:text-[28px] font-normal hover:text-white transition-colors cursor-pointer">OGUNLANA ABDULQUADRI</h1></Link>
                    </div>
                    <div className="text-2xl cursor-pointer" onClick={openMenubar}>
                        {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden  opacity-100 w-[380px] md:w-[1240px] right-0 pl-18 border-t border-gray-800 bg-transparent ">
                        <div className="w-11/12 container mx-auto py-6">
                            <div className="flex flex-col gap-6 font-medium text-[18px]">
                                <Link 
                                disabled={isDisabled}
                                    href="#" 
                                    className="hover:text-white transition-colors  border-b border-gray-800 cursor-pointer py-2"
                                    onClick={closeMenubar}
                                >
                                    Work
                                </Link>
                                <Link 
                                    href='/about' 
                                    className="hover:text-white transition-colors border-b border-gray-800 cursor-pointer py-2"
                                    onClick={closeMenubar}
                                >
                                    About
                                </Link>
                                <Link 
                                    href="#" 
                                    className="hover:text-white transition-colors border-b border-gray-800 cursor-pointer py-2"
                                    onClick={closeMenubar}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}






