import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";

export const Home = () =>{
    return ( 
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

        <ThemeToggle />

        <StarBackground />

        <Navbar />
        <main>
            <HomeSection />

            <AboutSection />

            <SkillSection />

            <ProjectSection />



        </main>
        
    
    </div>
    );
}