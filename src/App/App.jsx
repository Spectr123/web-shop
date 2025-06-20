import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AboutUsPage from '../Pages/AboutUsPage';
import ContactPage from '../Pages/ContactPage';
import WorkPage from '../Pages/WorkPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/AboutUsPage" element={<AboutUsPage />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/WorkPage" element={<WorkPage />} />
    </Routes>
  );
}

export default App;