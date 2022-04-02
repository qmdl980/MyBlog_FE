import "../App.css"
import {useEffect,useState} from "react";
import 'rc-pagination/assets/index.css'
import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from "react-router-dom";
import Pagination from "rc-pagination";

const ArticleList = ({boardData, category}) => {
    const navigate = useNavigate();

    if (category) {
        boardData = boardData.filter((item) => {
            return item.category === category
        })
    }
    const [limit, setLimit] = useState(9)
    const [count, setCount] = useState(boardData.length)
    const [currentPage, setCurrentPage] = useState(1)

    const getData = async () => {
        
    }

    useEffect(() =>{
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
                {boardData.map((item) => (
                        <div onClick={(e) => goArticle(e, item.idx)}
                             style={{cursor: 'pointer', marginLeft: "20px", marginTop: "40px"}}
                             key={item.idx}>
                            <PostCard title={item.title}/>
                        </div>
                    )
                )}
            </div>
            <Pagination total={count} current={currentPage} pageSize={limit} onChange={(page) => setCurrentPage(page)}/>
        </>
    )
}
export default ArticleList