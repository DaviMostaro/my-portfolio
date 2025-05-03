import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Page = () => {
    return (
        <div className="">
            <header className="max-md:max-w-[768px]">
                <Header />
            </header>
            <main className="max-md:max-w-[768px]">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>         
            <footer>
                <Footer />
            </footer>              
        </div>
    );
}

export default Page;