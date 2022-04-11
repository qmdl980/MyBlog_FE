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
                    <Link to={"/board"} className='menu-item-text'>전체 게시물</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/javascript"} className='menu-item-text'>JavaScript</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/react"} className='menu-item-text'>React</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/nodejs"} className='menu-item-text'>Node.JS</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/error"} className='menu-item-text'>Solve Error</Link>
                </div>
                <div className='menu-bar-item'>
                    <Link to={"/project"} className='menu-item-text'>프로젝트 정보</Link>
                </div>
            </center>
        </div>
    )
}
export default Menubar