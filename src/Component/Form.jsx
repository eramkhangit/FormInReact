
import { useEffect, useState } from 'react'


function FormCRUD() {

  const [formData, setFormData] = useState({
    "Name": '',
    "Email": ''
  })
  const [submit, setSubmit] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmit(true)
  }

  useEffect(() => {
    if (submit) {
      const submitForm = () => {
        try {
          const response = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(formData) 
            // "body property is use to send data to server when making a request". body is use when application have body otherwise it's throw error[Jis body ka data lena ho usi variable ko body ke parenthesisi me use karenge ]
          })
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              setFormData( )
              console.log("Data:", (data))
             
            })
        } catch (error) {
          console.log("ERROR :", error);
        } finally {
          setSubmit(false)
        }
      }
      submitForm()
    }
  }, [submit, formData])


  return (
    <>
      <h1>Form Sumbit</h1>
      <div>
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">
            <input type="text" id='name' name='Name'  required placeholder='Enter Your Name' onChange={(e) => {setFormData({ ...formData, Name : e.target.value })}} />
          </label><br /><br />

          <label htmlFor="email">
            <input type="email" id='email' name='Email' required placeholder='Enter Your Email' onChange={(e) => {setFormData({ ...formData, Email: e.target.value })}} />
          </label><br /><br />

          <button type='submit'>Submit</button>

        </form>
      </div>



    </>
  )
}

export default FormCRUD
