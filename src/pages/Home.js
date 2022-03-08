import PostCard from '../components/Postcard/PostCard'
import {Link} from 'react-router-dom'
import "../App.css"
import { propTypes } from 'react-bootstrap/esm/Image'

function Home(props) {

    const rendering = () => {
        const result = [];
        for(let i = 0; i < props.boardData.length; i++){
            result.push(
                <Link to={`/${props.boardData[i].idx}`} style={{marginLeft:"20px", marginTop:"40px"}}>
                    <PostCard title={props.boardData[i].title} />
                </Link>
            )
        }
        return result;
    }

    return (
        <div className={"content-wrap"}>
            <div className={"article"}>
                {rendering()}
            </div>
        </div>
    )
}
export default Home