import "../App.css"
import ArticleList from "../components/ArticleList";

function Board(props) {

    return (
        <div className={"content-wrap"}>
            <ArticleList boardData={props.boardData}/>
        </div>
    )
}

export default Board