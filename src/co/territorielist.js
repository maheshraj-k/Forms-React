import React, { useState } from "react";
import axios from 'axios'

function TerritorieList(){
    const [values, setValues] = useState({
        territorie_id: '',
        territorie_name:'',
        venue_id:'',
        class_id:'', 
	
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value] });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db4', values)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
   
       return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2> Territorie List </h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
  <label htmlFor="territorie_id"><strong>territorie_id</strong></label>
  <input type="text" id="territorie_id" name="territorie_id" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="territorie_name"><strong>territorie_name</strong></label>
  <input type="name" id="territorie_name" name="territorie_name" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="venue_id"><strong>venue_id</strong></label>
  <input type="text" id="venue_id" name="venue_id" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-3'>
  <label htmlFor="class_id"><strong>class_id</strong></label>
  <input type="text" id="class_id" name="class_id" className="form-control rounded=0" onChange={handleChange} />
</div>

 <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
   </form>
      </div>
      </div>
                                       
       )
    }

export default TerritorieList;