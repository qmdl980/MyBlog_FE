import "../App.css"
import ArticleList from "../components/ArticleList";

const Home = (props) => {

    return (
        <div className={"main-content-wrap"}>
            <div className={"main-content"}>

            </div>
            <div className={"content-wrap"}>
                <div className={"left-border-title"}>Recently upload</div>
                <ArticleList boardData = {props.boardData}/>
            </div>
        </div>
    )
}

export default Home