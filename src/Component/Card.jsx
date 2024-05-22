import React from 'react'

function Card({name,id ,Email}) {
  return (
    <div className='bg-slate-200 rounded-md shadow-md px-4 py-2'>
         <h4>Id : <span>{id}</span></h4>
        <h4>Name : <span>{name}</span></h4>
        <h4>Email : <span>{Email}</span> </h4>
    </div>
  )
}

export default Card