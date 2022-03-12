import {Link} from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-inner">
                <h1 className="header-title">
                    <Link to={"/"} style={{color: "black"}}>지니 개발 이야기</Link>
                </h1>
                <ul style={{padding: 0}}>
                    <Link to={"/"} className='menu-item'>홈</Link>
                    <Link to={"/project"} className='menu-item'>프로젝트</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header