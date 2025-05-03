"use client";

import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

export const Skills = () => {
    const [sectionActive, setSectionActive] = useState<0 | 1 | 2>(0);

    const handleSoftClick = () => {
        setSectionActive(sectionActive === 1 ? 0 : 1);
    };

    const handleHardClick = () => {
        setSectionActive(sectionActive === 2 ? 0 : 2);
    };

    const handleBackClick = () => {
        setSectionActive(0);
    };

    return (
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto my-20 bg-gray-900 rounded-2xl p-7 relative max-md:my-10 max-md:p-4">
            <h1 className="text-4xl mb-20 max-md:text-3xl max-md:mb-10">Minhas Habilidades</h1>

            {sectionActive === 0 && (
                <div className="flex flex-row justify-around gap-x-20 mt-25 max-md:flex-col max-md:gap-y-4 max-md:mt-10">
                    <div
                        onClick={handleSoftClick}
                        className="bg-blue-500 py-4 px-10 cursor-pointer hover:bg-blue-600 rounded-xl max-md:px-6 max-md:py-2"
                    >
                        <p className="text-2xl max-md:text-xl">Soft Skills</p>
                    </div>
                    <div
                        onClick={handleHardClick}
                        className="bg-blue-500 py-4 px-10 cursor-pointer hover:bg-blue-600 rounded-xl max-md:px-6 max-md:py-2"
                    >
                        <p className="text-2xl max-md:text-xl">Hard Skills</p>
                    </div>
                </div>
            )}

            {sectionActive !== 0 && (
                <div
                    onClick={handleBackClick}
                    className="bg-blue-500 py-4 px-10 cursor-pointer hover:bg-blue-600 rounded-xl mt-10 max-md:px-6 max-md:py-2"
                >
                    <ArrowBackIcon />
                </div>
            )}

            <div
                className={`grid grid-cols-2 gap-y-5 mt-20 transition-all duration-500 ease-in-out transform ${
                    sectionActive === 1 ? "opacity-100 scale-100 max-h-[1000px]" : "opacity-0 scale-95 max-h-0 overflow-hidden"
                } max-md:grid-cols-1 max-md:mt-10`}
            >
                <p className="text-2xl max-md:text-xl">Trabalho em equipe <DoneIcon /></p>
                <p className="text-2xl pl-20 max-md:text-xl max-md:pl-0">Proativo <DoneIcon /></p>
                <p className="text-2xl max-md:text-xl">Organizado <DoneIcon /></p>
                <p className="text-2xl pl-20 max-md:text-xl max-md:pl-0">Adaptabilidade <DoneIcon /></p>
                <p className="text-2xl max-md:text-xl">Comunicativo <DoneIcon /></p>
                <p className="text-2xl pl-20 max-md:text-xl max-md:pl-0">Flexibilidade <DoneIcon /></p>
                <p className="text-2xl max-md:text-xl">Resolução de problemas <DoneIcon /></p>
                <p className="text-2xl pl-20 max-md:text-xl max-md:pl-0">Autodisciplina <DoneIcon /></p>
                <p className="text-2xl max-md:text-xl">Capacidade de aprendizagem <DoneIcon /></p>
                <p className="text-2xl pl-20 max-md:text-xl max-md:pl-0">Criatividade <DoneIcon /></p>
            </div>

            <div
                className={`grid grid-cols-4 gap-x-20 gap-y-10 my-20 transition-all duration-500 ease-in-out transform ${
                    sectionActive === 2 ? "opacity-100 scale-100 max-h-[1000px]" : "opacity-0 scale-95 max-h-0 overflow-hidden"
                } max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-x-10 max-md:my-10`}
            >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="firebase logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="django logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="express logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="git logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="html5 logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="javascript logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="mongodb logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="mysql logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="nextjs logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="nodejs logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="postgresql logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="python logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="react logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="redux logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-16 h-16 max-md:w-12 max-md:h-12" alt="typescript logo" />
                
            </div>
        </div>
    );
};