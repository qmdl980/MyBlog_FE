import "../App.css"
import {Button, Form} from "react-bootstrap"
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


const UpdateArticle = () => {
    const [validated, setValidated] = useState(false)
    const [category, setCategory] = useState([])
    const [article, setArticle] = useState({
        category: '',
        title: '',
        text: ''
    })
    const id = useParams().id
    const navigate = useNavigate()

    useEffect(() => {
        getCategory()
        getData()
    }, [])

    const getCategory = async () => {
        const response = await axios.get("/api/category")
        setCategory(response.data)
    }

    const getData = async () => {
        const response = await axios.get(`/api/article/${id}`)
        setArticle(response.data)
    }

    const setField = (field, value) => {
        setArticle({
            ...article,
            [field]: value
        })
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
            id: id,
            category: form.categoryInput.value,
            title: form.titleInput.value,
            text: form.contentText.value
        }
        updateArticle(article)
    }

    const updateArticle = async (article) => {
        if(window.confirm("수정하시겠습니까?")){
            const res = await axios.put('/api/write_article', article)
            alert("수정되었습니다.")
            navigate(
                '/'
            )
        }else{
            alert("취소 되었습니다.")
        }

    }

    return (
        <div className={"content-wrap"}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className={"add-article-wrap"}>
                <Form.Group controlId="categoryInput" className={"add-article-category"}>
                    <Form.Select size="sm">
                        <option key = 'blankChoice' hidden value={article.category}>{article.category}</option>
                        {category.map((item) => {
                            return <option value = {item.category} key={item.id}>{item.category}</option>
                        })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">카테고리를 정해주세요</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="titleInput" >
                    <Form.Control required type="text" size = "lg" placeholder="제목 입력" className={"add-article-title"} value={article.title}
                                  onChange={(e) => setField('title', e.target.value)}/>
                    <Form.Control.Feedback type="invalid">제목을 입력하세요</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="contentText" className={"add-article-text"}>
                    <Form.Control required as="textarea" rows={20} value={article.text}
                                  onChange={(e) => setField('text', e.target.value)}/>
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
export default UpdateArticle