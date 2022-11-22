import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'


const UsersFrom = ({getUser, userSelector, deselectUser}) => {
    const {handleSubmit, register, reset} = useForm()

    useEffect(()=>{

        if (userSelector) {


            console.log(userSelector);
            reset({
                email: userSelector.email,
                password: userSelector.password,
                first_name: userSelector.first_name,
                last_name: userSelector.last_name,
                birthday: userSelector.birthday


            })
        }


    },[userSelector])


    const sumit = (data) => {


        console.log(data);
        if (userSelector) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelector.id}/`,data)
            .then(()=> {getUser(); deselectUser()})
            .catch(error => console.log(error.response?.data))
        } 
        else {
            axios.post('https://users-crud1.herokuapp.com/users/', data)
            .then(()=> getUser())
            .catch(error => console.log(error.response?.data))
        }
    }



    return (



    <form  className='input-ripes'  onSubmit={handleSubmit(sumit)}>
        <ul>
        <strong><h2>New user</h2></strong>
        <div className="input-container">
            <label htmlFor="first_name">First Name</label> 
            <br />
            <input {...register('first_name')} type="text" id='first_name' placeholder='First name'/>
        </div>
        <div className="input-container">
            <label htmlFor="last_name">Last Name</label> 
            <br />
            <input {...register('last_name')} type="text" id='last_name' placeholder='Last name'/>
        </div>
        <div className="input-container">
            <label htmlFor="email">Email</label>
            <br />
            <input {...register('email')} type="email" id='email' placeholder='Email'/>
        </div>
        <div className="input-container">
            <label htmlFor="password">Password</label>
            <br />
            <input {...register('password')} type="text" id='password' placeholder='Password'/>
        </div>
        <div className="input-container">
            <label htmlFor="birthday">Birthday</label>
            <br />
            <input {...register('birthday')} type="date" id='birthday' />
        </div>
        <button>Summit</button>
        </ul>
    </form>



    );
};

export default UsersFrom;