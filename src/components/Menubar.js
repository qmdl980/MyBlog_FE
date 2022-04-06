import "../App.css"
import {Link} from "react-router-dom";

const Menubar = () => {


    return (
        <div className={"menu-bar"}>
            <center>
                <div style={{fontSize: "1.5em", fontFamily: "one-pop", marginBottom:"20px"}}>
                    카테고리
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/board"} >전체 게시물</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/javascript"}>JavaScript</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/react"}>React</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/nodejs"}>Node.JS</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/error"}>Solve Error</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/project"}>프로젝트 정보</Link>
                </div>
            </center>
        </div>
    )
}
export default Menubar