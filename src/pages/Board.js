import "../App.css"
import {useLocation} from "react-router-dom";
import {useState} from "react";

function Board(props) {

    const state = useLocation().state


    return(
        <div className={"content-wrap"}>
            <div>{state.title}</div>
            <div>{state.text}</div>
        </div>
    )
}
export default Board