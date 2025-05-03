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
        <div className="flex flex-row max-w-7xl mx-auto my-20 h-screen">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <h1 className="mb-5 text-3xl">Seja bem vindo(a) ao meu Portfolio!</h1>
                <p>Aqui você encontrará informações sobre mim, minhas habilidades, alguns dos meus projetos desenvolvidos e meios de contato.</p>
                <div className="mt-10 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500" onClick={handleButtonClick}>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className="w-1/2 ml-20 flex justify-center items-center mt-[-100px]">
                <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZ3ZHczOGV6cmNqdXkwZ3I5ZDluaWplN3p2YWh0cmFmNTNobHRsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/765ccrAiB0g9z6EApL/giphy.gif" 
                    alt="Descrição do GIF"
                    className="w-128 h-128 object-cover rounded-full" 
                />
            </div>
        </div>
    );
};