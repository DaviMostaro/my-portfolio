"use client";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Home = () => {

    const handleButtonClick = () => {
        const element = document.getElementById('about');
        if (element) {
            const headerHeight = 80; 
            const sectionPosition = element.offsetTop; 
            window.scrollTo({
                top: sectionPosition - headerHeight, 
                behavior: 'smooth', 
            });
        }
    };

    return (
        <div className="flex flex-row max-w-7xl justify-center mx-auto my-20 h-screen max-lg:flex-col max-lg:items-center max-lg:h-auto max-lg:my-10 max-lg:mt-30 max-md:my-10">
            <div className="w-full flex flex-col justify-center items-center m-10 max-lg:w-full max-lg:mb-10">
                <h1 className="mb-5 text-3xl max-md:text-2xl max-md:mt-20 max-md:text-center">
                    Seja bem vindo(a) ao meu Portfolio!
                </h1>
                <p className="max-md:text-sm max-md:px-4 max-md:text-center max-lg:text-center">
                    Aqui você encontrará informações sobre mim, minhas habilidades, alguns dos meus projetos desenvolvidos e meios de contato.
                </p>
                <div
                    className="mt-10 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500"
                    onClick={handleButtonClick}
                >
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className="m-10 w-full flex justify-center items-center mt-[-100px] max-lg:mt-0">
                <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZ3ZHczOGV6cmNqdXkwZ3I5ZDluaWplN3p2YWh0cmFmNTNobHRsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/765ccrAiB0g9z6EApL/giphy.gif"
                    alt="Descrição do GIF"
                    className="w-64 h-64 object-cover rounded-full sm:w-72 sm:h-72 md:w-80 md:h-80"
                />
            </div>
        </div>
    );
};
