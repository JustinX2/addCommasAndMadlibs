import React, { useState } from 'react';

function MadlibForm({onSubmit}){
    const [formData, setFormData]=useState({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    });

    const handleChange = (e)=>{
        const {name, value}=e.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }));
      };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(formData);
    };

    return(
        <form onSubmit={handleSubmit} className="madlib-form">
            <input
                name="noun"
                value={formData.noun}
                onChange={handleChange}
                placeholder="noun"
                required
            />
            <input
                name="noun2"
                value={formData.noun2}
                onChange={handleChange}
                placeholder="noun2"
                required
            />
            <input
                name="adjective"
                value={formData.adjective}
                onChange={handleChange}
                placeholder="adjective"
                required
            />
            <input
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="color"
                required
            />
            <button type="submit">Generate Story!</button>

        </form>
    );
}

export default MadlibForm;