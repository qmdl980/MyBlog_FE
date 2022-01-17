import {Link} from 'react-router-dom'
import "./Header.css"

function Header() {
    return(
        <div className="header">
            <ul>
                <Link to={"/"} className='menu-item'>홈</Link>
            </ul>
            <ul>
                <Link to={"/project"} className='menu-item'>프로젝트</Link>
            </ul>
        </div>
    )
}
export default Header