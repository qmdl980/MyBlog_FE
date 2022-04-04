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
import {useEffect, useState} from "react";
import axios from "axios";
import AddArticle from "./pages/AddArticle";

const App = () => {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/board" element={<Board/>} exact/>
                    <Route path="/project" element={<Project/>} exact/>
                    <Route path="/javascript" element={<JavaScript/>} exact/>
                    <Route path="/:id" element={<Article/>}/>
                    <Route path="/write" element={<AddArticle/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
