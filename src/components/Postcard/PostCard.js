import { Card } from 'react-bootstrap'
import img from "../../img/js.png"

function PostCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} style={{width:"180px", height:"100px"}}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
export default PostCard