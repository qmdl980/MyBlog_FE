import "../App.css"


function Board() {
    return(
        <div className={"content-wrap"}>
            <div>{this.props.title}</div>
            <div>{this.props.text}</div>
        </div>
    )
}
export default Board