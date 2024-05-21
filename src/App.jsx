
import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    "Name": '',
    "Email": ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "post",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          return response.json()
        })
        .then( (data) => console.log("Data:", data ) )

    } catch (error) {
      console.log("ERROR :", error);
    }

  }


  return (
    <>
      <h1>Form Sumbit</h1>
      <div>
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">
            <input type="text" id='name' name='Name' value={formData.Name} required placeholder='Enter Your Name' onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
          </label><br /><br />

          <label htmlFor="email">
            <input type="email" id='email' name='Email' value={formData.Email} required placeholder='Enter Your Email' onChange={(e) => setFormData({ ...formData, Email: e.target.value })} />
          </label><br /><br />

          <button type='submit'>Submit</button>

        </form>
      </div>
    </>
  )
}

export default App
