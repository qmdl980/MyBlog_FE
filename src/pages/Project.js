import "../App.css"
import ArticleList from "../components/ArticleList";


const Project = (props) => {

    return (
        <div className={"content-wrap"}>
            <ArticleList boardData={props.boardData} category='project'/>
        </div>
    )
}

export default Project