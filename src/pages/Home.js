import "../App.css"
import ArticleList from "../components/ArticleList";

const Home = (props) => {

    return (
        <div className={"main-content-wrap"}>
            <div className={"main-content"}>

            </div>
            <div className={"background"}>
                <div className={"content-wrap"}>
                    <div className={"left-border-title"}>Recently upload</div>
                    <ArticleList category={"Home"}/>
                </div>
            </div>
        </div>
    )
}

export default Home