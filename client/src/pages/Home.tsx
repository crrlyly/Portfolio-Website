import Navbar from "../components/Navbar/Navbar";
import TitlePage from "../components/Title/TitlePage";
import About from "../components/About/About";
import CodeProjects from "../components/CodeProjects/CodeProjects";
import UIUXProjects from "../components/UIUX Projects/UIUXProjects";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Particles from "../components/Shared/Particles";

const Home = () => {
  return (
    <>
      <Particles></Particles>
      <Navbar></Navbar>
      <TitlePage></TitlePage>
      <About></About>
      <CodeProjects></CodeProjects>
      <UIUXProjects></UIUXProjects>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
};

export default Home;
