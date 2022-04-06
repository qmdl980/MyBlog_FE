import "../App.css"
import ArticleList from "../components/ArticleList";

const ArticleReact = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>React 공부</div>
                <ArticleList category={'React'}/>
            </div>
        </div>
    )
}

export default ArticleReact