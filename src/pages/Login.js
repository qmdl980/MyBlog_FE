import React, {useState, useEffect} from "react";
import axios from "axios";

const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [adminData, setAdminData] = useState()

    useEffect(() => {
        getAdminInfo()
    }, [])

    const getAdminInfo = async () => {
        const response = await axios.get("/api/admin")
        setAdminData(response)
        console.log(response)
    }

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    return(
        <>
            <div>

            </div>
        </>
    )
}

export default Login
