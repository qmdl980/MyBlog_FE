import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Home'
import Home from './pages/Home';
import Project from './pages/Project'
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/project" element={<Project />} exact />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
