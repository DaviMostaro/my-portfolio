type Props = {
    imagem: string;
    title: string;
    description: string;
    repository: string;
    deploy?: string;
};

export const ProjectItem = ({ imagem, title, description, repository, deploy }: Props) => {
    return (
        <div className="max-w-96 bg-gray-950 rounded-2xl overflow-hidden flex flex-col h-full">
            <img
                className="w-96 h-52 rounded-t-2xl object-cover max-md:w-full max-md:h-40"
                src={imagem}
                alt={title}
            />

            <h2 className="text-xl m-4 max-md:text-lg"> {title} </h2>

            <p className="text-sm text-gray-500 m-4 max-md:text-xs flex-grow"> {description} </p>

            <div className={`flex ${deploy ? "flex-row justify-between" : "justify-center"} m-4 mt-auto`}>
                <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={repository}>
                    Repositório
                </a>
                {deploy && (
                    <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={deploy}>
                        Deploy
                    </a>
                )}
            </div>
        </div>
    );
};
