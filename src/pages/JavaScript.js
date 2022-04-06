import "../App.css"
import ArticleList from "../components/ArticleList";

const JavaScript = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>JavaScript 공부</div>
                <ArticleList category={'JavaScript'}/>
            </div>
        </div>
    )
}

export default JavaScript