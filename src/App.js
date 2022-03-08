import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Home'
import Home from './pages/Home';
import Project from './pages/Project'
import Layout from './components/Layout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const boardData = [
    {
        idx: 1,
        title: '자바스크립트 공부 1',
        text: '자바스크립트 공부시작...',
        category: 'javascript'
    },
    {
        idx: 2,
        title: '자바스크립트 공부2',
        text: '자바스크립트 공부 2일차...',
        category: 'javascript'
    },
    {
        idx: 3,
        title: '리액트 프로젝트 시작하기',
        text: 'create-react-app',
        category: 'project'
    },
    {
        idx:4,
        title: '리액트 프로젝트 2일차',
        text: '컴포넌트 만들기',
        category: 'project'
    }
]

function App() {
    return (

        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home boardData={boardData}/>} exact/>
                    <Route path="/project" element={<Project boardData={boardData}/>} exact/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
