import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/projects';

export const transitionType = 'slide';

export default function Projects() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <h1>Projects</h1>
        <p>Here are some of the projects I've worked on:</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </AnimatedPage>
    </Layout>
  );
} 