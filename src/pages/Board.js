import "../App.css"
import ArticleList from "../components/ArticleList";

const Board = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>전체 게시물</div>
                <ArticleList boardData={props.boardData}/>
            </div>
        </div>
    )
}

export default Board