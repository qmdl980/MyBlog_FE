import "../App.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const Article = (props) => {

    const [article, setArticle] = useState('')
    const [date, setDate] = useState('')
    const id = useParams().id

    useEffect(() => {
        getData(id)
    }, [])

    const getData = async (id) => {
        const response = await axios.get(`/api/article/${id}`)
        setArticle(response.data)
        setDate(response.data.timestamp.substring(0,10))
    }

    return (
        <div className="article-wrap">
            <center>
                <div className="article-content">
                    <div className="board-title">
                        <h1 className="left-border-title">
                            {article.title}
                        </h1>
                        <h6 className="article-date-form">
                            {date}
                        </h6>
                    </div>
                    <div className="board-text">{article.text}</div>
                </div>
            </center>
        </div>
    )
}

export default Article