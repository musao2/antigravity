import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Hero from "./Hero";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="BgImg relative">
                <header className="flex justify-between py-5 px-4 md:px-10 items-center relative z-50">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-light text-center md:text-left text-white">
                            FREE POWER TECH
                        </h1>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-5 items-center backdrop-blur-md bg-white/10 px-10 h-15 rounded-2xl border border-white text-base">
                        <a href="/" className="text-white hover:text-[#FF675B] transition-colors">Biz haqimizda</a>
                        <a href="/" className="text-white hover:text-[#FF675B] transition-colors">Mahsulotlar</a>
                        <a href="/" className="text-white hover:text-[#FF675B] transition-colors">Hamkorlarimiz</a>
                        <a href="/" className="text-white hover:text-[#FF675B] transition-colors">Kafolat</a>
                        <button className="bg-white text-black px-6 py-2 rounded-2xl hover:bg-gray-200 transition-colors">Aloqa</button>
                    </div>

                    {/* Mobile Burger Icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
                        </button>
                    </div>

                </header>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col gap-4 p-6 z-40 md:hidden shadow-2xl">
                        <a href="/" className="text-white text-lg hover:text-[#FF675B] transition-colors border-b border-white/10 pb-2">Biz haqimizda</a>
                        <a href="/" className="text-white text-lg hover:text-[#FF675B] transition-colors border-b border-white/10 pb-2">Mahsulotlar</a>
                        <a href="/" className="text-white text-lg hover:text-[#FF675B] transition-colors border-b border-white/10 pb-2">Hamkorlarimiz</a>
                        <a href="/" className="text-white text-lg hover:text-[#FF675B] transition-colors border-b border-white/10 pb-2">Kafolat</a>
                        <button className="bg-white text-black text-lg px-6 py-3 rounded-2xl hover:bg-gray-200 transition-colors mt-2 font-medium">Aloqa</button>
                    </div>
                )}

                <Hero/>
            </div>
        </>
    );
}

export default Header;