import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from 'react-router-dom'
import "../App.css"


function Project(props) {

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
        <div className={"content-wrap"}>
            <div className={"board-wrap"}>
                {props.boardData.map((item) => {
                    if (item.category === 'project')
                        return (
                            <div onClick={(e) => goArticle(e, item.idx)}
                                 style={{cursor: 'pointer', marginLeft: "20px", marginTop: "40px"}}
                                 key={item.idx}>
                                <PostCard title={item.title}/>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default Project