import React, { useState} from "react";
import axios from 'axios'

function Venue(){
    const [values, setValues] = useState({
         venue_id: '',
         venue_name:'',
         address:'',
         city:'',
         zipcode:'',
       
    })
    const handleChange= (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8086/froms_db', values)
            .then(res => console.log("Submitted successfully"))
            .catch(err => console.log(err));
    }
    
    return(
        <div className="d-flex w-100 vh-100 bg-primary justiffy-content-center align-items-center1">
            <div className='bg-white p-3 rounded w-256'>

                    <h2>Venue List</h2>
                    <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
  <label htmlFor="venue_id"><strong>venue_id</strong></label>
  <input type="text" id="venue_id" name="venue_id" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-4'>
  <label htmlFor="venue_name"><strong>venue_name</strong></label>
  <input type="name" id="venue_name" name="venue_name" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-4'>
  <label htmlFor="address"><strong>address</strong></label>
  <input type="text" id="address" name="address" className="form-control rounded=0" onChange={handleChange} />
</div>

<div className='mb-4'>
  <label htmlFor="city"><strong>city</strong></label>
  <input type="name" id="city" name="city" className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-4'>
  <label htmlFor="zipcode"><strong>zipcode</strong></label>
  <input type="text" id="zipcode" name="zipcode" className='form-control rounded-0' onChange={handleChange} />
</div>

                    <button type='submit' className='btn btn-success w-100 rounded-0' onChange={handleChange}> Submit</button>
                       </form>
                       </div>
                       </div>
                                       
                       )
                    }

export default Venue;