import "../App.css"
import ArticleList from "../components/ArticleList";

function Home(props) {

    return (
        <div className={"main-content-wrap"}>
            <div className={"main-content"}>

            </div>
            <div className={"main-content-article"}>
                <div className={"left-border-title"}>Recently upload</div>
                <ArticleList boardData = {props.boardData}/>
            </div>
        </div>
    )
}

export default Home