import { Route, Routes } from 'react-router-dom';
import {
  Careers,
  CaseStudy,
  ContactUs,
  Customers,
  Error404,
  Home,
  Job,
  Loading,
  Products,
  Projects,
  Technologies,
  TechnologyCaseStudy,
} from './components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
  const { pathname } = useLocation();
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    // Extracts pathname property(key) from an object

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      setIsLoading(false);
    });
  }, [pathname]);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact us' element={<ContactUs />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/technologies/:id' element={<TechnologyCaseStudy />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/products' element={<Products />} />
        <Route path='/projects/:customer' element={<Projects />} />
        <Route path='/job/:job' element={<Job />} />
        <Route path='/case_study/:job' element={<CaseStudy />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
