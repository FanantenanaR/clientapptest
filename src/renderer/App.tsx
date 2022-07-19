import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import AppProvider from './providers/app';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
