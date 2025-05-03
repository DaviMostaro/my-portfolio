type Props = {
    imagem: string;
    title: string;
    description: string;
    repository: string;
    deploy?: string;
};

export const ProjectItem = ({ imagem, title, description, repository, deploy }: Props) => {
    return (
        <div className="max-w-96 bg-gray-950 rounded-2xl overflow-hidden">
            <img className="w-96 h-52 rounded-t-2xl object-cover" src={imagem} alt={title} />
            <h2 className="text-xl m-4">{title}</h2>
            <p className="text-sm text-gray-500 m-4">{description}</p>
            <div className="flex flex-row justify-between m-4">
                <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={repository}>Repositório</a>
                <a className="text-blue-500" target="_blank" rel="noopener noreferrer" href={deploy}>Deploy</a>
            </div>
        </div>
    );
}