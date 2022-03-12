import "../App.css"
import {useLocation} from "react-router-dom";
import "../App.css"

function Article(props) {

    const state = useLocation().state

    return(
        <div className={"content-wrap"}>
            <h1 className="board-title">{state.title}</h1>
            <div className="board-text">{state.text}</div>
        </div>
    )
}
export default Article