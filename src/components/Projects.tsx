import { ProjectItem } from "./ProjectItem";
import ComputerIcon from '@mui/icons-material/Computer';

export const Projects = () => {
    return (
        <div className="bg-gray-900 rounded-2xl flex flex-col max-w-7xl m-auto">
            <div className="flex justify-center items-center mt-10">
                <h1 className="text-4xl mb-7 max-md:text-3xl max-md:text-center"><ComputerIcon /> Alguns dos meus Projetos <ComputerIcon /></h1>
            </div>        
            <div className="grid grid-cols-3 gap-x-20 gap-y-10 mx-auto bg-gray-900 rounded-2xl p-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:p-6 max-md:gap-x-10
            max-md:max-w-[700px]">
                <ProjectItem
                    imagem="/assets/amigo.png"
                    title="Amigo Secreto"
                    description="Sistema completo para criar, gerenciar e participar de jogos de amigo secreto."
                    repository="https://github.com/DaviMostaro/amigo-secreto"
                />
                <ProjectItem
                    imagem="/assets/olx.png"
                    title="OLX Clone"
                    description="Clone do OLX com algumas funcionalidade do site original. Feito para fins de aprendizagem."
                    repository="https://github.com/DaviMostaro/olx-clone-fullStack"
                />
                <ProjectItem
                    imagem="/assets/devsfood.png"
                    title="DevsFood"
                    description="Site de delivery de comida. Feito para fins de aprendizagem."
                    repository="https://github.com/DaviMostaro/devsfood"
                />
                <ProjectItem
                    imagem="/assets/financial.png"
                    title="Sistema Financeiro"
                    description="Sistema para controle financeiro pessoal com divisão por períodos. Feito para fins de aprendizagem."
                    repository="https://github.com/DaviMostaro/financial-system"
                />
                <ProjectItem
                    imagem="/assets/todo.png"
                    title="List de Tarefas"
                    description="Site para criar, editar e excluir tarefas. Feito para fins de aprendizagem."
                    repository="https://github.com/DaviMostaro/todo_list"
                />
                <ProjectItem
                    imagem="/assets/shadcn.png"
                    title="Loja Shadcn"
                    description="Site de delivery de comida. Feito com componentes da biblioteca Shadcn."
                    repository="https://github.com/DaviMostaro/shadcn-store"
                />
            </div>
        </div>
    );
};