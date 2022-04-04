import "../App.css"
import {Button, Form} from "react-bootstrap"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const AddArticle = () => {
    const [validated, setValidated] = useState(false)
    const [category, setCategory] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const response = await axios.get("api/category")
        setCategory(response.data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()

        const form = event.currentTarget
        if (!form.checkValidity()) {
            setValidated(false)
            return
        }

        setValidated(true)

        const article = {
            category: form.categoryInput.value,
            title: form.titleInput.value,
            text: form.contentText.value
        }
        addArticle(article)
    }

    const addArticle = async (article) => {
        const res = await axios.post('/api/write_article', article)
        navigate(
            '/'
        )
    }

    return (
        <div className={"content-wrap"}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className={"add-article-wrap"}>
                <Form.Group controlId="categoryInput" className={"add-article-category"}>
                    <Form.Select size="sm">
                        <option key = 'blankChoice' hidden value>카테고리를 선택해주세요</option>
                        {category.map((item) => {
                            return <option value = {item.category} key={item.id}>{item.category}</option>
                        })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">카테고리를 정해주세요</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="titleInput" >
                    <Form.Control required type="text" size = "lg" placeholder="제목 입력" className={"add-article-title"}/>
                    <Form.Control.Feedback type="invalid">제목을 입력하세요</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="contentText" className={"add-article-text"}>
                    <Form.Control required as="textarea" rows={20}/>
                    <Form.Control.Feedback>looks good</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">내용을 입력하세요</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" className={"add-article-button"}>
                    저장
                </Button>
            </Form>
        </div>
    )

}
export default AddArticle