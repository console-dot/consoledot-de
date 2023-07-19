import { HomeBanner } from '../HomeBanner';
import { Layout } from '../Layout';
import { About } from './About';
import { Contact } from './Contact';
import { Header } from './Header';
import { WhyUs } from './WhyUs';

export const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <Header />
      <About />
      <WhyUs />
      <Contact />
    </Layout>
  );
};
