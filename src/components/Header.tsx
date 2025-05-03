"use client";

import { useState, useEffect } from "react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const headerHeight = 80; 
            const sectionPosition = section.offsetTop; 
            window.scrollTo({
                top: sectionPosition - headerHeight, 
                behavior: "smooth", 
            });
        }
    };

    return (
        <div
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
                isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
            }`}
        >
            <div className="flex flex-row align-center justify-around py-4">
                <div
                    onClick={() => handleScrollToSection("home")}
                    className="ml-90 hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer"
                >
                    Home
                </div>
                <div
                    onClick={() => handleScrollToSection("about")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer"
                >
                    Sobre mim
                </div>
                <div
                    onClick={() => handleScrollToSection("skills")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer"
                >
                    Skills
                </div>
                <div
                    onClick={() => handleScrollToSection("projects")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer"
                >
                    Projetos
                </div>
                <div
                    onClick={() => handleScrollToSection("contact")}
                    className="mr-90 hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer"
                >
                    Contato
                </div>
            </div>
        </div>
    );
};