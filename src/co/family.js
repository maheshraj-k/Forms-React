import React, { useState } from "react";
import axios from 'axios'

function FamilyList(){
    const [values1, setValues] = useState({
      parent_id:'',
         parent_name:'',
         student_id:'',
         address	:'',
         mobile:'',
         city:'',
         email	:'',
         zipcode:'',
        
    })
    const handleChange = (event) => {
        setValues({...values1, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db2', values1)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
   
       return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2>Family List</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
  <label htmlFor="parent_id"><strong>parent_id</strong></label>
  <input type="text" id="parent_id" name="parent_id" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="parent_name"><strong>parent_name</strong></label>
  <input type="name" id="parent_name" name="parent_name" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="student_id"><strong>student_id</strong></label>
  <input type="text" id="student_id" name="student_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="address"><strong>address	</strong></label>
  <input type="text" id="address" name="address" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="mobile"><strong>mobile</strong></label>
  <input type="text" id="mobile" name="mobile" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="city"><strong>city</strong></label>
  <input type="name" id="city" name="city" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="email	"><strong>email	</strong></label>
  <input type="text" id="email	" name="email	" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="zipcode"><strong>zipcode</strong></label>
  <input type="text" id="zipcode" name="zipcode" className='form-control rounded-0' onChange={handleChange} />
</div>
 <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
   </form>
      </div>
      </div>
                                       
       )
    }

export default FamilyList;


