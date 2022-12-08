import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../component/FormContainer'
import axios from 'axios'

export const ProfileScreen = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const userLogin = JSON.parse(localStorage.getItem('userInfo'))

    useEffect(() => {
        if(userLogin){
            setEmail(userLogin.email)
            setName(userLogin.name)
        }
    }, [])

    const navigate = useNavigate()

    const updateHandler = async(e) => {
        e.preventDefault()
        console.log(userLogin)
        if(password !== confirmedPassword){
            alert("The passwords you entered two times are not consistence!")
        }else if(name === '' || email === '' || password === '' || confirmedPassword === ''){
            alert("Please enter every fields of the page!")
        }else{
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userLogin.token}`
                }
            }
            const { data } = await axios.put(`/api/users/${userLogin._id}`, { email, name, password, confirmedPassword }, config)
            localStorage.setItem('userInfo', JSON.stringify(data))
            navigate('/profile')
        }
    }


  return (
        <FormContainer>
            <h1>User Info</h1>
            {userLogin ? (
                <Form onSubmit={updateHandler}>
                    <Form.Group controlId='email'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type='text' placeholder='Change User Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Change Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Change Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='email'>
                        <Form.Label>Confirmed Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Your Changed Password Again' value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button className='my-3' type='submit' variant='primary'>
                        Update User Info
                    </Button>
                </Form>
            ) : (
                <h3>Please <Link to='/login'>login</Link> to see user info </h3>
            )}
        </FormContainer>
  )
}

export default ProfileScreen
