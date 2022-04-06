import "../App.css"
import {useEffect, useState} from "react";
import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from "react-router-dom";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css'
import axios from "axios";
import Menubar from "./Menubar";

const ArticleList = (props) => {
    const navigate = useNavigate()

    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const offset = (currentPage - 1) * limit

    useEffect(() => {
        getData()
    }, [currentPage])

    const getData = async () => {
        const response = await axios.get("/api/articles")
        let data = []

        if (props.category === "Project") {
            data = response.data.filter((item) => {
                if (!item.is_article) {
                    return item
                }
            }).reverse()
            setCount(data.length)
            setPosts(data.slice(offset, offset + limit))
            return
        } else if (props.category === "Home") {
            data = response.data.reverse()
            setCount(data.length)
            setPosts(data.slice(offset, offset + limit))
            return
        } else if (props.category) {
            data = response.data.filter((item) => {
                if (item.category === props.category && item.is_article) {
                    return item
                }
            }).reverse()
            setCount(data.length)
            setPosts(data.slice(offset, offset + limit))
            return
        } else {
            data = response.data.filter((item) => {
                if (item.is_article) {
                    return item
                }
            }).reverse()
            setCount(data.length)
            setPosts(data.slice(offset, offset + limit))
            return
        }
    }


    const goArticle = (event, id) => {
        navigate(
            `/${id}`
        )
    }

    return (
        <>
            <div className={"article-menu-wrap"}>
                <div className={"board-wrap"}>
                    {posts.map((item) => (
                            <div onClick={(e) => goArticle(e, item.id)}
                                 className={"postcard"}
                                 key={item.id}>
                                <PostCard title={item.title} text={item.text} date={item.timestamp}/>
                            </div>
                        )
                    )}
                </div>
                <Menubar/>
            </div>
            <div className={"paging"}>
                <Pagination total={count}
                            current={currentPage}
                            pageSize={limit}
                            onChange={(page) => setCurrentPage(page)}/>
            </div>
        </>
    )
}
export default ArticleList