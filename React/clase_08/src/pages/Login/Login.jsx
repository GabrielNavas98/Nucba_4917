import { Button, LoginContainer, LoginForm } from './LoginStyles';
import { Card } from '../Products/ProductsStyles';
import { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexto/AuthContext';



const Login = () => {

  const {handleChange, handleSubmit, isAuth} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuth){
      navigate('/')
    }
  }, [navigate, isAuth])

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
