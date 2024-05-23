import React, { useState } from 'react'

function Form() {

  const [formData, setFormData] = useState({ name: "", email: "", gender: "", terms: "" })
  const [submitData, setSubmitData] = useState(null)
  const onHandle = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type == 'checkbox' ? checked : value,

    })

  }
  const submitHandle = (events) => {
    events.preventDefault();
    setSubmitData(formData);
    setFormData({
      name: "",
      email: "",
      gender: '',
      terms: "",
    })
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <div><label>Name:<input type='text' name='name' value={formData.name} onChange={onHandle} /></label></div>
        <br />
        <div><label>Email:<input type='email' name='email' value={formData.email} onChange={onHandle} /></label></div>
        <br />
        <div><label>Gender:<select name='gender' value={formData.gender} onChange={onHandle}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select></label></div>
        <br />
        <div><label>Term & Condition<input type='checkbox' name='terms' value={formData.terms} onChange={onHandle} /></label></div>
        <div>
          <input type='submit' name='submitt'></input>

        </div>

      </form>
      {submitData && (
        <div>
          <h2>Submitted Data</h2>
          <p><strong>Name :</strong>{submitData.name}</p>
          <p><strong>Email :</strong>{submitData.email}</p>
          <p><strong>Gender :</strong>{submitData.gender}</p>
          <p><strong>T&C:</strong>{submitData.terms ? 'Yes' : 'No'}</p>
        </div>

      )}
    </>
  )
}

export default Form
