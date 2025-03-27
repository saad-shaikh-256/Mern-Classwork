import React from 'react'

const FormValidation = () => {

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
   });
   const [errors, setErrors] = useState({});

   
   return (
      <div>FormValidation</div>
   )
}

export default FormValidation