import React from 'react'
import { exptyp, options } from '../data/data'
import { useState } from 'react'

const ExpInput = () => {

  const [exp, addExp] = useState(exptyp)

  function handleExpInput(event) {
    console.log(event.target.value);
  }
  function handleSelect(event) {
    console.log(event.target.value);
    addExp(exp[event.target.value]["DoesExist"] = exp[event.target.value]["DoesExist"] == false ? true : true)
    console.log(exp);
  }

  function handleRemove(event){
    event.target.parentElement.parentElement.remove()
    console.log(event.target.parentElement.parentElement);
    
  }

  return (
    <div className='flex w-full justify-between items-center py-2' >
        <input type="number" className='p-1 rounded-md ' onChange={(event) => handleExpInput(event)} />
        <select className='p-1 rounded-md' onChange={(event)=>{handleSelect(event)}} >
            {
                options.map(option => (
                    <option key={option.label}  value={option.label}  >{option.label}</option>
                ))
            }
        </select>
        <div>
          <i className="fa-solid fa-trash text-[#5f80ee] cursor-pointer" onClick={(event)=>{handleRemove(event)}} ></i>
        </div>
    </div>
  )
}

export default ExpInput