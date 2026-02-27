"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50">
            {/* Background Strips */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#407294] z-0 hidden md:block"></div>
            <div className="absolute top-0 md:top-10 left-0 w-full h-[70px] md:h-[80px] bg-white shadow-sm z-0 border-b border-gray-100"></div>

            <div className="max-w-[1600px] mx-auto relative z-10 w-full">
                {/* Shield & Logo (Desktop only) */}
                <div className="hidden md:block absolute top-0 left-4 sm:left-8 md:left-12 lg:left-[5%] xl:left-[8%] w-[110px] md:w-[130px] lg:w-[160px]">
                    <Image
                        src="/Vector 1.svg"
                        alt="Shield background"
                        width={160}
                        height={140}
                        className="w-full h-auto drop-shadow-md"
                        priority
                    />
                    <div className="absolute inset-0 flex justify-center pt-5 md:pt-6 lg:pt-[32px]">
                        <div className="relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[85px] lg:h-[85px]">
                            <Image
                                src="/logo.png"
                                alt="Kalp Vriksh Public School Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Top bar info (Desktop only) */}
                <div className="hidden md:flex justify-end items-center h-10 px-4 md:px-12 lg:px-20 text-white text-[13px] font-medium space-x-6">
                    <div className="flex items-center space-x-2">
                        <Mail size={14} className="opacity-90" />
                        <a href="mailto:kalpvrikshschool4@gmail.com" className="hover:underline">kalpvrikshschool4@gmail.com</a>
                    </div>
                    <div className="block h-[14px] w-px bg-white/40"></div>
                    <div className="flex items-center space-x-2">
                        <Phone size={14} className="opacity-90" />
                        <a href="tel:+917404780978" className="hover:underline">+91 7404780978</a>
                    </div>
                    <div className="block h-[14px] w-px bg-white/40"></div>
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-200">
                        <LogIn size={15} />
                        <Link href="/login">Parents Login</Link>
                    </div>
                </div>

                {/* Main Nav Container */}
                <div className="flex justify-between md:justify-end items-center h-[70px] md:h-[80px] px-4 md:px-12 lg:px-20 lg:pl-[280px] xl:pl-[340px]">

                    {/* Mobile Logo & Title */}
                    <div className="md:hidden flex items-center gap-3">
                        <div className="relative w-[45px] h-[45px]">
                            <Image src="/ab/Reportcard KVPS 1.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <div className="flex flex-col text-[#315671] font-bold leading-[1.15]">
                            <span className="text-[17px]">Kalp Vriksh</span>
                            <span className="text-[17px]">Public School</span>
                        </div>
                    </div>

                    {/* Links desktop */}
                    <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 text-[14px] xl:text-[15px] font-bold text-[#1f2937]">
                        <Link href="/" className="hover:text-[#FFB800] transition">Home</Link>
                        <Link href="https://kalpvrikshpublicschool.com/about" className="hover:text-[#FFB800] transition">About Us</Link>
                        <Link href="https://kalpvrikshpublicschool.com/admissions" className="hover:text-[#FFB800] transition">Admissions</Link>
                        <Link href="https://kalpvrikshpublicschool.com/mandatory-disclosure" className="hover:text-[#FFB800] transition whitespace-nowrap">Mandatory Disclosure</Link>
                        <Link href="https://kalpvrikshpublicschool.com/gallery" className="hover:text-[#FFB800] transition">Gallery</Link>
                        <Link href="https://kalpvrikshpublicschool.com/contact" className="hover:text-[#FFB800] transition">Contact</Link>
                    </nav>

                    {/* Enquire button (Desktop) */}
                    <div className="hidden md:block ml-4">
                        <Link href="/enquire" className="bg-[#FFC107] hover:bg-[#ffb000] text-white text-[15px] font-bold py-[10px] px-8 rounded-full shadow-sm transition whitespace-nowrap">
                            Enquire
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden flex items-center justify-center bg-[#315671] text-white p-2 rounded-[8px] hover:bg-[#233f57] transition"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Slide-out Menu */}
            {/* Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/40 z-[60] md:hidden" onClick={() => setIsMenuOpen(false)}></div>
            )}

            {/* Sidebar Content */}
            <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#315671] z-[70] md:hidden shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                {/* Close Button */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-0 right-0 bg-[#FFB800] text-black w-10 h-10 flex items-center justify-center hover:bg-[#e6a600] transition"
                >
                    <X size={20} />
                </button>

                <div className="px-6 py-8 flex flex-col h-full">
                    {/* Header / Logo */}
                    <div className="flex items-center gap-3 mb-10 mr-6">
                        <div className="relative w-12 h-12 shrink-0">
                            <Image src="/Vector 1.svg" alt="Shield" layout="fill" className="drop-shadow-sm" />
                            <div className="absolute inset-0 flex items-center justify-center pt-1.5">
                                <div className="relative w-[60%] h-[60%]">
                                    <Image src="/ab/Reportcard KVPS 1.png" alt="Logo" layout="fill" className="object-contain" />
                                </div>
                            </div>
                        </div>
                        <div className="text-white font-bold leading-[1.2]">
                            <div className="text-[17px]">Kalp Vriksh</div>
                            <div className="text-[17px]">Public School</div>
                        </div>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col space-y-6 text-white font-semibold text-[15px]">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="https://kalpvrikshpublicschool.com/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        <Link href="https://kalpvrikshpublicschool.com/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
                        <Link href="https://kalpvrikshpublicschool.com/mandatory-disclosure" onClick={() => setIsMenuOpen(false)}>Mandatory Disclosure</Link>
                        <Link href="https://kalpvrikshpublicschool.com/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                        <Link href="https://kalpvrikshpublicschool.com/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>

                    {/* Contact Info */}
                    <div className="mt-auto space-y-5 mb-4 text-white font-medium text-[13px]">
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="shrink-0" />
                            <a href="mailto:kalpvrikshschool4@gmail.com">kalpvrikshschool4@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="shrink-0" />
                            <a href="tel:+917404780978">+917404780978</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
