
import { useEffect, useState } from 'react'
import Card from './Card'


function FormCRUD() {

  const [formData, setFormData] = useState({
    "Name": '',
    "Email": ''
  })
  const [submit, setSubmit] = useState(false)
  const [storeData, setStoreData] = useState([])
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
              setFormData()
              setStoreData(data)

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

      <div className='bg-slate-400 flex m-10 py-6 max-w-[50%] px-2 '>
        <div className='m-auto'>
          <form onSubmit={handleSubmit} className='m-auto'>

            <label htmlFor="name">
              <input type="text" id='name' name='Name' required placeholder='Enter Your Name' onChange={(e) => { setFormData({ ...formData, Name: e.target.value }) }} className='placeholder:px-2 px-2 mb-2 rounded-md py-1' />
            </label><br />

            <label htmlFor="email">
              <input type="email" id='email' name='Email' required placeholder='Enter Your Email' onChange={(e) => { setFormData({ ...formData, Email: e.target.value }) }} className='placeholder:px-2 px-2 mb-2 rounded-md py-1' />
            </label><br />

            <button type='submit' className='bg-white py-1 px-4 rounded-md '>Submit</button>

          </form>
        </div>
      </div>

      <div className=' max-w-[50%] m-10' >
        <Card name={storeData.Name} Email={storeData.Email}  id={storeData.id}/>
      </div>

    </>
  )
}

export default FormCRUD
