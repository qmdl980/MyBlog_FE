import {Link} from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <h1 className="header-title">
                    <Link to={"/"} style={{color: "black"}}>지니 개발 이야기</Link>
                </h1>
                <ul className={"header-menu"}>
                    <Link to={"/board"} className='menu-item'>게시물</Link>
                    <Link to={"/project"} className='menu-item'>프로젝트</Link>
                    <Link to={"/javascript"} className='menu-item'>자바스크립트</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header