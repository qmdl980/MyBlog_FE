import PostCard from '../components/Postcard/PostCard'
import {useNavigate} from 'react-router-dom'
import "../App.css"

function JavaScript(props) {

    const navigate = useNavigate();

    const goBoard = (event, id) => {
        const state = {
            title: props.boardData[id - 1].title,
            text: props.boardData[id - 1].text
        }
        navigate(
            `/${id}`,
            {state: state}
        );
    }

    return (
        <div className={"content-wrap"}>
            <div className={"article"}>
                {props.boardData.map((item) => {
                    if (item.category === 'javascript') {
                        return (
                            <div onClick={(e) => goBoard(e, item.idx)}
                                 style={{cursor: 'pointer', marginLeft: "20px", marginTop: "40px"}}
                                 key={item.idx}>
                                <PostCard title={item.title}/>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default JavaScript