import { Button, LoginContainer, LoginForm } from './LoginStyles';
import { Card } from '../Products/ProductsStyles';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const initialValue = {
  username: '',
  password: ''
}

const Login = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState(initialValue)

  const handleChange = (e) => {
    // console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(form);

    if (!form.username.trim() || !form.password.trim()) {
      alert('Completa los campos')
      return
    }

    navigate(`/user/${form.username}`)
    
    setForm(initialValue)

  }
  return (
    <LoginContainer>
      <Card>
        <img
          src='https://www.thesun.ie/wp-content/uploads/sites/3/2022/12/2022-argentinas-lionel-messi-kisses-784174076-3.jpg?strip=all&quality=100&w=1080&h=1080&crop=1'
          alt=''
        />
        <LoginForm>
          <input
            type='text'
            placeholder='Username'
            id='username'
            name='username'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            onChange={handleChange}
          />
          <Button type='submit' onClick={handleSubmit}>
            Login
          </Button>
        </LoginForm>
      </Card>
    </LoginContainer>
  );
};

export default Login
