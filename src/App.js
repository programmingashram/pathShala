import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DocsReact from './DocsReact';
import HeaderApp from './HeaderApp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderApp />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="reactdocs" element={<DocsReact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
