import {Routes, Route} from 'react-router-dom';
import {Landing, About, Blog, FourOhFour} from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}

export default App;
