import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';
import WritingCard from '../../components/WritingCard';
import writings from '../../data/writings';

export const transitionType = 'slide';

export default function Writings() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <h1>Writings</h1>
        <p>Articles and thoughts on technology, development, and more:</p>
        
        <div className="projects-grid">
          {writings.map((writing) => (
            <WritingCard
              key={writing.id}
              title={writing.title}
              description={writing.description}
              link={writing.link}
            />
          ))}
        </div>
      </AnimatedPage>
    </Layout>
  );
} 