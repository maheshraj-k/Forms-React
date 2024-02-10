import React, { useState } from "react";
import axios from 'axios'

function SessionList(){
    const [values, setValues] = useState({
        session_id : '',
        date:'',
        time:'',
        student_id: '',
        instructor_id: '',
        venue_id: '',
        class_id: '',
        duration: '',	
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value] });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db6', values)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
   
       return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2> Session List </h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
  <label htmlFor="session_id "><strong>session_id </strong></label>
  <input type="text" id="session_id " name="session_id " className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="date"><strong>date</strong></label>
  <input type="date" id="date" name="date" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="time"><strong>time</strong></label>
  <input type="time" id="time" name="time" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="student_id"><strong>student_id</strong></label>
  <input type="text" id="student_id" name="student_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_id"><strong>instructor_id</strong></label>
  <input type="text" id="instructor_id" name="instructor_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="venue_id"><strong>venue_id</strong></label>
  <input type="text" id="venue_id" name="venue_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="class_id"><strong>class_id</strong></label>
  <input type="text" id="class_id" name="class_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="duration"><strong>duration</strong></label>
  <input type="datetime" id="duration" name="duration" className="form-control rounded=0" onChange={handleChange} />
</div>

 <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
   </form>
      </div>
      </div>
                                       
       )
    }

export default SessionList;
