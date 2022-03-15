import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Home'
import Home from './pages/Home';
import Project from './pages/Project';
import Board from './pages/Board';
import JavaScript from "./pages/JavaScript";
import Layout from './components/Layout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Article from "./pages/Article";


const boardData = [
    {
        idx: 1,
        title: '자바스크립트 공부 1',
        text: '자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...자바스크립트 공부시작...',
        category: 'javascript',
        date: '2022-01-08'
    },
    {
        idx: 2,
        title: '자바스크립트 공부2',
        text: '자바스크립트 공부 2일차...',
        category: 'javascript',
        date: '2022-01-09'
    },
    {
        idx: 3,
        title: '리액트 프로젝트 시작하기',
        text: 'create-react-app',
        category: 'project',
        date: '2022-01-10'
    },
    {
        idx:4,
        title: '리액트 프로젝트 2일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:5,
        title: '리액트 프로젝트 3일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:6,
        title: '리액트 프로젝트 4일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:7,
        title: '리액트 프로젝트 5일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:8,
        title: '리액트 프로젝트 6일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:9,
        title: '리액트 프로젝트 7일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:10,
        title: '리액트 프로젝트 8일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:11,
        title: '리액트 프로젝트 9일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:12,
        title: '리액트 프로젝트 10일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
    {
        idx:13,
        title: '리액트 프로젝트 11일차',
        text: '컴포넌트 만들기',
        category: 'project',
        date: '2022-01-11'
    },
]

function App() {
    return (

        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home boardData={boardData}/>} exact/>
                    <Route path="/board" element={<Board boardData={boardData}/>} exact/>
                    <Route path="/project" element={<Project boardData={boardData}/>} exact/>
                    <Route path="/javascript" element={<JavaScript boardData={boardData}/>} exact/>
                    <Route path="/:id" element={<Article/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
