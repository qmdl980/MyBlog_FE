import { Card } from 'react-bootstrap'
import img from "../../img/cover_img.png"

function PostCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
export default PostCard