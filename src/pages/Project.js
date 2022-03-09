import PostCard from '../components/Postcard/PostCard'
import {Link} from 'react-router-dom'
import "../App.css"

function Project(props) {

    return (
        <div className={"content-wrap"}>
            <div className={"article"}>
                {props.boardData.map((item, i) => {
                    if (item.category === 'project') {
                        return (<Link to={`/${item.idx}`}
                                      style={{marginLeft: "20px", marginTop: "40px"}}
                                      key={i}
                                      id={i}
                                      title={item.title}
                                      text={item.text}>
                            <PostCard title={item.title}/>
                        </Link>)
                    }
                })}
            </div>
        </div>
    )
}

export default Project