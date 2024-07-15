import React, { useState } from 'react'
import styles from './Register.module.css'
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import{useNavigate} from 'react-router-dom'
export default function Register() {

  const [error, setError] = useState('')
  const [loading, setloading] = useState(false)
  let navigate=useNavigate();
  let validate = Yup.object({
    name:Yup.string().required('Name is required').min(3,'minimum name 3 char').max(15,'maxmuim 15 char'),
    email:Yup.string().required('email is required').email('Email InVaild'),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/,'Password Must start with upercase'),
    rePassword:Yup.string().required('Repassword is required').oneOf([Yup.ref('password')],'RePassword Don"t Match'),
    phone:Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/,' phone InVaild'),




  })
  let formik=useFormik({
    initialValues:{
       name:"",
       email:'',
       password:'',
       rePassword:'',
       phone:'',
    },validationSchema:validate
    ,onSubmit:sendRegisterData

  })
  async function sendRegisterData(values) {
    setloading(true)
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).catch((error)=>{
      setError(error.response.data.errors.param + ":" + error.response.data.errors.msg)
      setloading(false)
    })
    if (data.message == 'success') {
      setloading(false); 
      navigate('/login')
      
    }
  }
  return<>
  <div className='w-75 mx-auto'>
  <h2>Register Now</h2>
  <form onSubmit={formik.handleSubmit}>
    {error ? <div className='alert alert-danger'>{error}</div>:""}

    <label htmlFor="name">Name:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='name' id='name' className='form-control my-2' value={formik.values.name}/>
   {formik.errors.name && formik.touched.name?<div className='alert alert-danger'>{formik.errors.name}</div>:""}
    <label htmlFor="email">Email:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name='email' id='email' className='form-control my-2' value={formik.values.email}/>
    {formik.errors.email && formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:""}

    
    <label htmlFor="password">Password:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='password' id='password' className='form-control my-2' value={formik.values.password}/>
    {formik.errors.password && formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:""}

    
    
    <label htmlFor="rePassword">Repassword:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='rePassword' id='rePassword' className='form-control my-2' value={formik.values.rePassword}/>
    {formik.errors.rePassword && formik.touched.rePassword?<div className='alert alert-danger'>{formik.errors.rePassword}</div>:""}
    
    <label htmlFor="phone">Phone:</label>
    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" name='phone' id='phone' className='form-control my-2' value={formik.values.phone}/>
    {formik.errors.phone && formik.touched.phone?<div className='alert alert-danger'>{formik.errors.phone}</div>:""}
    <button type='submit' className='btn btn-info'>{loading?<i className='fas fa-spinner fa-spin'></i>:"Register"}</button>
    

    
  </form>

  </div>
      
    </>
  
}
      