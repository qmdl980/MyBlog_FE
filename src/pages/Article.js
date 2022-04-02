import "../App.css"
import {useLocation} from "react-router-dom";
import "../App.css"

const Article = () => {

    const state = useLocation().state

    const dateRender = () => {
        let date = state.date.split('-');
        return (
            date[0] + "년 " + date[1] + "월 " + date[2] + "일"
        )
    }

    return (
        <div className="article-wrap">
            <center>
                <div className="article-content">
                    <div className="board-title">
                        <h1 className="left-border-title">
                            {state.title}
                        </h1>
                        <h6 className="article-date-form">
                            {dateRender()}
                        </h6>
                    </div>
                    <div className="board-text">{state.text}</div>
                </div>
            </center>
        </div>
    )
}

export default Article