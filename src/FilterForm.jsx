import React from 'react'
import {useState} from 'react'

import './FilterForm.css'

const FilterForm = ({onFilter}) => {

    //useState for form state
   const [formData, setFormData] = useState({
    
   name: "",
   type: ""

   });

//Handle form changes

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};


//Form Submission

const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(formData);
};

return (
    <form className="formPage" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name of Item:</label>
            <input
            type = "text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            
            
            
            />
        </div>


        <div>
            <label htmlFor="type">Type of Item:</label>
            <input
             type = "text"
             id="type"
             name="type"
             value={formData.type}
             onChange={handleChange}
            
            
            
            />
        </div>
        <button type="submit">Submit</button>
    </form>
);




};

export default FilterForm;