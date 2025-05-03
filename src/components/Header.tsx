"use client";

import { useState, useEffect } from "react";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; 

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
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 xl:justify-between items-center py-4">
                <div
                    onClick={() => handleScrollToSection("home")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer max-md:text-sm max-md:px-3 max-md:py-1"
                >
                    <span className="hidden max-md:block">
                        <FaHome size={20} />
                    </span>
                    <span className="block max-md:hidden">Home</span>
                </div>

                <div
                    onClick={() => handleScrollToSection("about")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer max-md:text-sm max-md:px-3 max-md:py-1"
                >
                    <span className="hidden max-md:block">
                        <FaUser size={20} />
                    </span>
                    <span className="block max-md:hidden">Sobre mim</span>
                </div>

                <div
                    onClick={() => handleScrollToSection("skills")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer max-md:text-sm max-md:px-3 max-md:py-1"
                >
                    <span className="hidden max-md:block">
                        <FaTools size={20} />
                    </span>
                    <span className="block max-md:hidden">Skills</span>
                </div>

                <div
                    onClick={() => handleScrollToSection("projects")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer max-md:text-sm max-md:px-3 max-md:py-1"
                >
                    <span className="hidden max-md:block">
                        <FaProjectDiagram size={20} />
                    </span>
                    <span className="block max-md:hidden">Projetos</span>
                </div>

                <div
                    onClick={() => handleScrollToSection("contact")}
                    className="hover:bg-blue-500 px-5 py-2 rounded-md cursor-pointer max-md:text-sm max-md:px-3 max-md:py-1"
                >
                    <span className="hidden max-md:block">
                        <FaEnvelope size={20} />
                    </span>
                    <span className="block max-md:hidden">Contato</span>
                </div>
            </div>
        </div>
    );
};