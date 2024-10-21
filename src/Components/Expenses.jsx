import React, { useState } from 'react'
import { options } from '../data/data'
import ExpInput from './ExpInput';

 const Expenses = () => {

    
    const [currVal, Addval] = useState(4)

    function increaseComponent(){
        Addval(currVal + 1)
    }
    

  return (<>
    <div className='flex flex-col bg-[#F3F2F2] mx-80 justify-center items-center px-4 py-6 rounded-3xl' >
        <div className='flex w-9/12 bg-[#F3F2F2] justify-around items-center my-2' >
            <p>Enter Your Monthly Income/Earnings</p>
            <input type="number" placeholder='0' className='p-2 rounded-xl' />
        </div>
        <div className='my-2'>
            <h1 className='my-2' >Enter Expenses</h1>
        </div>
        <div className='flex flex-col w-9/12 justify-center items-center p-4 bg-[#D9D9D9] rounded-lg' >
            <div className='flex justify-between px-12 w-full ' >
                <p>Amount spent</p>
                <p>Type of Expense</p>
            </div>
            <div className='flex flex-col w-full justify-between px-8 py-4' >
                {
                    Array(currVal).fill(<ExpInput />)
                }
            </div>
            <div>
                <button className='px-6 py-4 rounded-xl mr-1 text-white bg-[#5f80ee]' onClick={()=>increaseComponent()}>Add  <i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        </div>
        
    
    </div>
    <div className='flex bg-[#5f80ee] mx-80 justify-center items-center my-6  rounded-3xl' >
        <button className=' flex w-full h-full justify-center items-center px-4 py-6 text-white'   >Show Financial Report for the Month</button>
    </div>
    </>
  )
}

export default Expenses