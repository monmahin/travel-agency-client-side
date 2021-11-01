import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
import './AddEvents.css'
const AddEvents = () => {
    const {user}=useAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://radiant-stream-41140.herokuapp.com/events', data)
        .then(res => {
        if (res.data.insertedId) {
            alert('added successfully')
            reset()
        }
    })
    }
    return (
        <div className="add-event">
            <h2>Please Add Event</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <hr />
                
                <input defaultValue={user.email} {...register("email", { required: true, maxLength: 20 })} placeholder="email" />
                <hr />
                <input {...register("place", { required: true, maxLength: 20 })} placeholder="place" />
                <hr />
                <textarea {...register("description")} placeholder="Description" />
                <hr />
                <input type="date" required {...register("date")} />
                <hr />
                <input {...register("img")} placeholder="image url" />
                <hr />
      <input className='btn btn-primary' type="submit" />
    </form>
        </div>
    );
};

export default AddEvents;
//<input required {...register("date")} type="date" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>