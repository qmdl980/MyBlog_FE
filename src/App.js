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
import AddArticle from "./pages/AddArticle";
import UpdateArticle from "./pages/UpdateArticle";
import Info from "./pages/Info";
import ArticleReact from "./pages/ArticleReact";
import ArticleNodejs from "./pages/ArticleNodejs";
import ArticleError from "./pages/ArticleError";
import Login from "./pages/Login"

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
                    <Route path="/edit/:id" element={<UpdateArticle/>}/>
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/react" element={<ArticleReact/>}/>
                    <Route path="/nodejs" element={<ArticleNodejs/>}/>
                    <Route path="/error" element={<ArticleError/>}/>
                    <Route path="/login" element={<Login/>}/>

                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
