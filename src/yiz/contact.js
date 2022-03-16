import React from 'react';
import { useForm } from "react-hook-form"
import { API_URL, doApiMethod } from "../services/apiService"

function Contact(props) {

  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = async (data) => {
    // data -> מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם
    console.log(data)
    // api request to send email !
    let url = API_URL + "/email/contact";
    try {
      let resp = await doApiMethod(url, "POST", data);
      console.log(resp.data)
      if (resp.data.status === "ok") {
        alert("Email sended")
      }
      else {
        alert("There problem , try again later")
      }
    }
    catch(err){
      console.log(err)
      alert("There problem , try again later 2")
    }
  }

  let nameRef = register("name", { required: true, minLength: 3 })
  let subjectRef = register("subject", { required: true, minLength: 3 })
  let msgRef = register("msg", { required: false, minLength: 3 })

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  })



  return (
    <div className='container p-5' id='sendid'>
      <h1 className='text-center'>Contact us:</h1>
      <form onSubmit={handleSubmit(onSubForm)} className='col-md-6 mx-auto p-3'>
        <label>Name:</label>
        <input {...nameRef} type="text" className='form-control' />
        {errors.name ? <small className='text-danger d-block'>Enter valid name, 3 chars min</small> : ""}
        <label>Your Email:</label>
        <input {...emailRef} type="text" className='form-control' />
        {errors.email ? <small className='text-danger d-block'>Enter valid Email</small> : ""}
        <label>Subjcet:</label>
        <input {...subjectRef} defaultValue="Subject:" type="text" className='form-control' />
        {errors.subject ? <small className='text-danger d-block'>Enter valid subject, 3 chars min</small> : ""}
        <label>Message:</label>
        <textarea {...msgRef} className='form-control'></textarea>
        {errors.msg ? <small className='text-danger d-block'>Enter valid message, 3 chars min</small> : ""}
        <button className='btn btn-danger'>Send</button>
      </form>
    </div>
  )
}

export default Contact