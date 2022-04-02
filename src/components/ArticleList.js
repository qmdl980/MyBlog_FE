import "../App.css"
import {useEffect, useState} from "react";
import 'rc-pagination/assets/index.css'
import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from "react-router-dom";
import Pagination from "rc-pagination";

const ArticleList = ({boardData, category}) => {
    const navigate = useNavigate();
    let currentPageData = []

    if (category) {
        currentPageData = boardData.filter((item) => {
            return item.category === category
        })
    }else{
        currentPageData = boardData
    }
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(9)
    const [count, setCount] = useState(boardData.length)
    const [currentPage, setCurrentPage] = useState(1)
    const offset = (currentPage - 1) * limit

    const getData = async () => {
        setPosts(
            currentPageData.slice(offset, offset + limit)
        )
    }

    useEffect(() => {
        getData()
    }, [currentPage])

    const goArticle = (event, id) => {
        const state = {
            title: boardData[id - 1].title,
            text: boardData[id - 1].text,
            date: boardData[id - 1].date
        }
        navigate(
            `/${id}`,
            {state: state}
        );
    }

    return (
        <>
            <div className={"board-wrap"}>
                {posts.map((item) => (
                        <div onClick={(e) => goArticle(e, item.idx)}
                             className={"postcard"}
                             key={item.idx}>
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