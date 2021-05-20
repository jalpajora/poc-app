import './App.css';
import { MainLayout } from 'poc-core-library/dist/MainLayout';
import AppRouter from './components/AppRouter';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Header = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </Router>
);

const Content = () => (
  <div>
    <h2>Page Content</h2>

    <AppRouter />
  </div>
);

const Footer = () => (
  <div>Footer</div>
);

function App() {
  return (
    <MainLayout>
      {[
        <Header />,
        <Content />,
        <Footer />
      ]}
    </MainLayout>
  );
}

export default App;
