import "./Footer.css"
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer-wrap">
            <div className="footer-content">
                <h1 className="footer-title">
                    <Link to={"/"} style={{color: "black"}}>지니 개발 이야기</Link>
                </h1>
                <ul className="footer-menu">
                    <div onClick={() => window.open("https://github.com/qmdl980",'_blank')}
                    style={{cursor:"pointer"}}>깃허브</div>
                </ul>
            </div>

        </div>
    )
}
export default Footer