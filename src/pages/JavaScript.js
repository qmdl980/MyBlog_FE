import "../App.css"
import ArticleList from "../components/ArticleList";

const JavaScript = (props) => {

    return (
        <div className={"content-wrap"}>
            <ArticleList boardData = {props.boardData} category='javascript'/>
        </div>
    )
}

export default JavaScript