import { Route, Routes } from 'react-router-dom';
import { Footer, Home, HomeBanner, Navbar } from './components';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
