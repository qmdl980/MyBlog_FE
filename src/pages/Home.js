import PostCard from '../components/Postcard/PostCard'
import {Link} from 'react-router-dom'
import "../App.css"
import {propTypes} from 'react-bootstrap/esm/Image'

function Home(props) {


    return (
        <div className={"content-wrap"}>
            <div className={"article"}>
                {props.boardData.map((item) => {
                    return (<div key={item.idx}
                                 id={item.idx}
                                 title={item.title}
                                 text={item.text}>
                        <Link to={`/${item.idx}`} style={{marginLeft: "20px", marginTop: "40px"}}>
                            <PostCard title={item.title}/>
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Home