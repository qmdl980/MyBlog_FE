import "../App.css"
import ArticleList from "../components/ArticleList";

const ArticleError = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>Solve Error</div>
                <ArticleList category={'error'}/>
            </div>
        </div>
    )
}

export default ArticleError