import "../App.css"
import ArticleList from "../components/ArticleList";

function JavaScript(props) {

    return (
        <div className={"content-wrap"}>
            <ArticleList boardData = {props.boardData} category='javascript'/>
        </div>
    )
}

export default JavaScript