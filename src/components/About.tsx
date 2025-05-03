export const About = () => {
    return (
        <div className="bg-gray-900 rounded-2xl flex flex-row mx-auto my-20 max-w-7xl p-10">
            <div className="w-1/2 ml-15">
                <img 
                    src="/assets/1.jpg" 
                    alt="Imagem de perfil"
                    className="w-96 h-96 object-cover rounded-full"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-5">Sobre mim</h1>
                <p>Olá! Meu nome é Davi Souza Mostaro e sou um desenvolvedor fullstack apaixonado por tecnologia. Atualmente, curso Ciência da Computação na UFJF, onde venho aprofundando meus conhecimentos e aprimorando minhas habilidades técnicas.

                Tenho maior domínio em HTML, CSS, TypeScript, React e Node.js, e estou sempre em busca de novos aprendizados para evoluir tanto pessoal quanto profissionalmente. Busco focar na área de desenvolvimento web e estou preparado para enfrentar desafios reais com dedicação, curiosidade e vontade de crescer. </p>
            </div>
        </div>
    );
}