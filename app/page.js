import Layout from '../components/Layout';
import AnimatedPage from '../components/AnimatedPage';
import Image from 'next/image';

export const transitionType = 'fade';

export default function Home() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <div className="about-container">
          <div className="profile-section">
            <div className="profile-image">
              <Image 
                src="/headshot.jpg" 
                alt="James Collett" 
                width={200} 
                height={200}
                className="profile-image-mask"
                priority
              />
            </div>
            <div className="profile-name">
              <h1>James Collett</h1>
            </div>
            <div className="social-links">
              <a href="https://github.com/jrc9862" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jrcollett/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:james.collett@stern.nyu.edu">Email</a>
            </div>
          </div>

          <div className="content-section">
            <h1>About Me</h1>
            
            <section>
              <h2>Bio</h2>
              <p>
                I work as a consultant at Sia Partners. I like coding, data, pointless side projects, 
                board games, UNC basketball, movies, reading, and other stuff. This website is a perpetual
                work in progress that is meant to be a hub for all the stuff I'm up to and 
                interested in.
              </p>
            </section>

            <section>
              <h2>Professional Experience</h2>
              <div>
                <h3>Sia Partners</h3>
                {/* <p>New York City, NY</p> */}
                <p>June 2023 - Present</p>
                {/* <ul>
                  <li>Key achievement placeholder</li>
                </ul> */}
              </div>
            </section>

            <section>
              <h2>Education</h2>
              <div>
                <h3>NYU Stern School of Business</h3>
                <p>Business and Political Economy & Data Science</p>
              </div>
            </section>

            <section>
              <h2>Recognitions</h2>
              <a href="https://bulletins.nyu.edu/undergraduate/business/student-services/honors-societies-awards/honors-societies-awards.pdf" target="_blank" rel="noopener noreferrer">NYU Stern: John Stevenson Leadership & Community Building Award</a>
              <br />
              <a href="https://poetsandquantsforundergrads.com/students/2024-best-brightest-business-major-james-collett-new-york-university-stern/" target="_blank" rel="noopener noreferrer">Poets & Quants: Best & Brightest Undergraduate Business Students</a>
            </section>

            <section>
              <h2>Technical Skills</h2>
              <ul>
                <li>Excel, PowerPoint, Word</li>
                <li>Python (Pandas, SKL, Seaborn, Scipy)</li>
                <li>R</li>
                <li>SQL</li>
                <li>PyTorch</li>
                <li>Project Management</li>
              </ul>
            </section>
          </div>
        </div>
      </AnimatedPage>
    </Layout>
  );
}
