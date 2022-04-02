import { Card } from 'react-bootstrap'
import img from "../../img/cover_img.png"
import "../../App.css"

const PostCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text>props.text</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PostCard