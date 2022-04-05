import "../App.css"
import {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Article = (props) => {
    const [article, setArticle] = useState('')
    const [date, setDate] = useState('')
    const id = useParams().id
    const navigate = useNavigate()

    useEffect(() => {
        getData(id)
    }, [])

    const getData = async (id) => {
        const response = await axios.get(`/api/article/${id}`)
        setArticle(response.data)
        setDate(response.data.timestamp.substring(0, 10))
    }



    return (
        <div className="article-wrap">
            <center>
                <div className="article-content">
                    <div className="board-title">
                        <div className="article-category-form">
                            카테고리: {article.category}
                        </div>
                        <h1 className="article-title-form">
                            {article.title}
                        </h1>
                        <ul style={{padding: "0 0", margin: "0 0"}}>
                            <span className="article-date-form">
                                {date}
                            </span>
                            <Link to={`/edit/${id}`} className="article-menu-item">수정</Link>
                            <a className="article-menu-item" onClick={async() => {
                                if(window.confirm("정말로 삭제하시겠습니까? 게시글에 관한 모든 정보가 없어집니다")){
                                    const res = await axios.delete(`api/article?id=${id}`)
                                    alert("삭제되었습니다.")
                                    navigate(-1)
                                }else{
                                    alert("취소되었습니다.")
                                }
                            }}>삭제</a>
                        </ul>
                    </div>
                    <div className="board-text">{article.text}</div>
                </div>
            </center>
        </div>
    )
}

export default Article