import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';

export const transitionType = 'fade';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TwilioOptIn() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <p>
          {/* This is a page specifially for whomever is reviewing my site for my twilio opt-in form. Stop rejecting it. I am trying to do a side project and twilio is being a pain in my behind. */}
        </p>
        <p>
          {/* I, James Collett, am explicitly opting in to recieve text messages from James Collett about anything he (I) wants. */}
        </p>
      </AnimatedPage>
    </Layout>
  );
}

