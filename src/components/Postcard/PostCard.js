import { Card } from 'react-bootstrap'
import img from "../../img/cover_img.png"
import "./PostCard.css"

const PostCard = (props) => {
    const date = props.date.substring(0,10)

    return (
        <Card className={"post-card"}>
            <Card.Img variant="top" src={img} className={"post-card-img"}/>
            <Card.Body>
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-date">{date}</Card.Text>
                <Card.Text className="card-text">{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default PostCard