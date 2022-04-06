import "../App.css"
import ArticleList from "../components/ArticleList";

const ArticleNodejs = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>Nodejs 공부</div>
                <ArticleList category={'Nodejs'}/>
            </div>
        </div>
    )
}

export default ArticleNodejs