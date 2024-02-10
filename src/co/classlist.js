import React, { useState } from "react";
import axios from 'axios'

function ClassList(){
    const [values, setValues] = useState({
        class_id: '',
        class_name:'',
        program_id:'',
        friendly_name: '',
        instructor_id: '',
        student_id: '',
        start_date: '',
        end_date: '',
        total_duration: '',
        session_id: '',	
        territorie_id: '',
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value] });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db7', values)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
   
       return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2> Class List </h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
  <label htmlFor="class_id"><strong>class_id </strong></label>
  <input type="text" id="class_id" name="class_id" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="class_name"><strong>class_name</strong></label>
  <input type="name" id="class_name" name="class_name" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="program_id"><strong>program_id</strong></label>
  <input type="text" id="program_id" name="program_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="friendly_name"><strong>friendly_name</strong></label>
  <input type="name" id="friendly_name" name="friendly_name" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_id"><strong>instructor_id</strong></label>
  <input type="text" id="instructor_id" name="instructor_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="student_id"><strong>student_id</strong></label>
  <input type="text" id="student_id" name="student_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="start_date"><strong>start_date</strong></label>
  <input type="date" id="start_date" name="start_date" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="end_date"><strong>end_date</strong></label>
  <input type="date" id="end_date" name="end_date" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="total_duration"><strong>total_duration</strong></label>
  <input type="text" id="total_duration" name="total_duration" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="session_id"><strong>session_id</strong></label>
  <input type="text" id="session_id" name="session_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="territorie_id"><strong>territorie_id</strong></label>
  <input type="text" id="territorie_id" name="territorie_id" className="form-control rounded=0" onChange={handleChange} />
</div>

 <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
   </form>
      </div>
      </div>
                                       
       )
    }

export default ClassList;
