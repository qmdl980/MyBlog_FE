import "../App.css"
import ArticleList from "../components/ArticleList";


const Project = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>프로젝트 정리</div>
                <ArticleList category={'Project'}/>
            </div>
        </div>
    )
}

export default Project