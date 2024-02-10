import React, { useState } from "react";
import axios from 'axios'

function ProgramList(){
    const [values, setValues] = useState({
        program_id: '',
        program_name:'',
        class_id:'',
        instructor_id:'', 
	
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value] });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db5', values)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
   
       return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2> Program List </h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
  <label htmlFor="program_id"><strong>program_id</strong></label>
  <input type="text" id="program_id" name="program_id" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="program_name"><strong>program_name</strong></label>
  <input type="name" id="program_name" name="program_name" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="class_id"><strong>class_id</strong></label>
  <input type="text" id="class_id" name="class_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_id"><strong>instructor_id</strong></label>
  <input type="text" id="instructor_id" name="instructor_id" className="form-control rounded=0" onChange={handleChange} />
</div>

 <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
   </form>
      </div>
      </div>
                                       
       )
    }

export default ProgramList;

