import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';
import DigestSignup from '../../components/DigestSignup';
import { digests } from '../../data/digests';

export const metadata = {
  title: 'Digests | James Collett',
  description:
    'Automated, AI-summarized research digests. PolEcon Digest covers new political economy and behavioral economics papers each week.',
};

export const transitionType = 'slide';

export default function Digests() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <div className="digest-container">
          <h1>Digests</h1>
          <p className="digest-intro">
            Automated research digests. Software I built watches a set of sources, and an
            LLM summarizes what&rsquo;s new. For things I actually wrote, see{' '}
            <a
              href="https://allegedly-brilliant.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Allegedly Brilliant
            </a>
            .
          </p>

          {digests.map((digest) => (
            <DigestSignup key={digest.id} digest={digest} />
          ))}

          <p className="digest-footnote">
            Unsubscribe at any time.
          </p>
        </div>
      </AnimatedPage>
    </Layout>
  );
}
