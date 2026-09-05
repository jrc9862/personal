import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/projects';
import getPinnedRepos from '../../lib/github';

export const transitionType = 'slide';

const normalizeLink = (link) => (link || '').toLowerCase().replace(/\/+$/, '');

export default async function Projects() {
  const pinned = await getPinnedRepos();

  // Hardcoded entries win over a pinned repo with the same URL — their
  // descriptions are hand-written.
  const seen = new Set(projects.map((p) => normalizeLink(p.link)));
  const allProjects = [
    ...projects,
    ...pinned.filter((repo) => !seen.has(normalizeLink(repo.link))),
  ];

  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <h1>Projects</h1>
        <p>Here are some of the projects I've worked on:</p>
        
        <div className="projects-grid">
          {allProjects.map((project) => (
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
