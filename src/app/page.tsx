import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Page = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
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