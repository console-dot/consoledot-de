import { useEffect, useState } from 'react';
import { HomeBanner } from '../HomeBanner';
import { Layout } from '../Layout';
import { About } from './About';
import { Contact } from './Contact';
import { Header } from './Header';
import { WhyUs } from './WhyUs';

export const Home = () => {
  const [show, setShow] = useState(
    localStorage.getItem('@HomeBanner') || 'true'
  );
  const gotoSection = () => {
    const location = window.location.search.split('');
    location.shift();
    const params = location.join('').split('=');
    params.forEach((item, index) => {
      if (item === 'path') {
        setTimeout(() => {
          const elem = document.getElementById(
            params[index + 1].replace('%20', ' ')
          );
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  };
  useEffect(() => {
    gotoSection();
  }, [window.location.search]);
  return (
    <Layout>
      {show === 'true' && <HomeBanner setShow={setShow} />}
      <Header />
      <About />
      <WhyUs />
      <Contact />
    </Layout>
  );
};
