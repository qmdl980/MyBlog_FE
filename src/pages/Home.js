import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from "react-router-dom";
import "../App.css"

function Home(props) {
    const navigate = useNavigate();

    const goArticle = (event, id) => {
        const state = {
            title: props.boardData[id - 1].title,
            text: props.boardData[id - 1].text,
            date: props.boardData[id - 1].date
        }
        navigate(
            `/${id}`,
            {state: state}
        );
    }

    return (
        <div className={"main-content-wrap"}>
            <div className={"main-content"}>

            </div>
            <div className={"main-content-article"}>
                <div className={"left-border-title"}>Recently upload</div>
                <div className={"board-wrap"}>
                    {props.boardData.map((item) => (
                            <div onClick={(e) => goArticle(e, item.idx)}
                                 style={{cursor: 'pointer', marginLeft: "20px", marginTop: "40px"}}
                                 key={item.idx}>
                                <PostCard title={item.title}/>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home