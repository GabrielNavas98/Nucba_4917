import React, { useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const initialValue = {
    username: '',
    password: ''
}
  
const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [form, setForm] = useState(initialValue)
    const [isAuth, setIsAuth] = useState(localStorage.getItem('user')) //ToDo
    const [user, setUser] = useState(isAuth ? localStorage.getItem('user') : '')


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.username.trim() || !form.password.trim()) {
            alert('Completa los campos')
            return
        }

        setUser(form.username)
        setIsAuth(true)
        setForm(initialValue)
        
        localStorage.setItem('user', form.username)

        navigate(`/user/${form.username}`)
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        setIsAuth(false)
        setUser('')

        navigate('/login')
    }

    const data = {
        handleChange,
        handleSubmit,
        handleLogout,
        isAuth,
        user,
        form
    }

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider