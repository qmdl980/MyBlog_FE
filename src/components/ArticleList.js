import "../App.css"
import {useEffect, useState} from "react";
import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from "react-router-dom";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css'
import axios from "axios";

const ArticleList = ({boardData, category}) => {
    const navigate = useNavigate()

    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(9)
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageData, setCurrentPageData] = useState([])
    const offset = (currentPage - 1) * limit

    useEffect(() => {
        getData()
    }, [currentPage])

    const getData = async () => {
        const response = await axios.get("/api/articles")
        if(category){
            const data = response.data.filter((item) => {
                if(item.category === category){
                    return item
                }
            })
            setCurrentPageData(data)
            setCount(data.length)
            setPosts(data.slice(offset, offset + limit))
            return
        }
        setCurrentPageData(response.data)
        setCount(response.data.length)
        setPosts(
            response.data.slice(offset, offset + limit)
        )
    }


    const goArticle = (event, id) => {
        navigate(
            `/${id}`
        )
    }

    return (
        <>
            <div className={"board-wrap"}>
                {posts.map((item) => (
                        <div onClick={(e) => goArticle(e, item.id)}
                             className={"postcard"}
                             key={item.id}>
                            <PostCard title={item.title} text={item.text}/>
                        </div>
                    )
                )}
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