import "../App.css"
import ArticleList from "../components/ArticleList";
import Menubar from "../components/Menubar";

const JavaScript = (props) => {

    return (
        <div className={"background"}>
            <div className={"content-wrap"}>
                <div className={'left-border-title'}>
                    ABOUT ME
                </div>
                <div className={'article-menu-wrap'}>
                    <div className={'info-wrap'}>
                        내 정보
                    </div>
                    <Menubar/>
                </div>
            </div>

        </div>
    )
}

export default JavaScript