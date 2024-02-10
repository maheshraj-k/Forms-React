import React, { useState } from "react";
import axios from 'axios'

function InstructorList(){
    const [values, setValues] = useState({
        instructor_id: '',
        instructor_name	:'',
        instructor_bio:'',
        instructor_photo:'', 
        instructor_address	:'',
        instructor_city:'',
        instructor_zipcode:'',	
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db1', values)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
   
       return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2>Instructor List</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
  <label htmlFor="instructor_id"><strong>instructor_id</strong></label>
  <input type="text" id="instructor_id" name="instructor_id" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_name	"><strong>instructor_name	</strong></label>
  <input type="name" id="instructor_name	" name="instructor_name	" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_bio"><strong>instructor_bio</strong></label>
  <input type="text" id="instructor_bio" name="instructor_bio" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_photo"><strong>instructor_photo</strong></label>
  <input type="text" id="instructor_photo" name="instructor_photo" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_address	"><strong>instructor_address	</strong></label>
  <input type="name" id="instructor_address	" name="instructor_address	" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_city"><strong>instructor_city</strong></label>
  <input type="text" id="instructor_city" name="instructor_city" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="instructor_zipcode"><strong>instructor_zipcode</strong></label>
  <input type="text" id="instructor_zipcode" name="instructor_zipcode" className='form-control rounded-0' onChange={handleChange} />
</div>

 <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
   </form>
      </div>
      </div>
                                       
       )
    }

export default InstructorList;


