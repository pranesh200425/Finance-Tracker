import React from 'react'

const Report = () => {
  return (
    <div className='flex flex-col min-h-screen ' >
        <div className='flex min-w-full p-4 my-4 justify-center items-center' >
            <h1 className='text-2xl text-[#09299D]' >Your Financial Report is here</h1>
        </div>
        <div className='flex min-h-[480px] max-w-screen mx-4 px-12 ' >
            <div className='flex flex-col justify-around w-36 items-center m-1 min-h-full' >
                <button className='bg-[#5B72C0] text-xl text-black rounded-3xl px-6 py-4' >Pie chart</button>
                <button className=' text-xl text-black rounded-3xl px-6 py-4' >Bar chart</button>
                <button className=' text-xl text-black rounded-3xl px-6 py-4' >Line graph</button>
            </div>
            <div className='flex flex-1 m-1 min-h-full border-l-2 border-b-2 border-[#09299D] ' >
            </div>
            <div className='grid grid-cols-2 w-1/3 p-8 m-1 justify-items-center ' >
                <div className='flex p-2 max-h-max justify-around items-center' >
                    <div className='bg-orange-400 h-6 w-8 mr-1'></div>
                    <span className='ml-1' >Home</span>
                </div>
                <div className='flex p-2 max-h-max justify-around items-center' >
                    <div className='bg-red-600 h-6 w-8 mr-1'></div>
                    <span className='ml-1' >Insurance</span>
                </div>
                <div className='flex p-2 max-h-max justify-around items-center' >
                    <div className='bg-green-400 h-6 w-8 mr-1'></div>
                    <span className='ml-1' >Food</span>
                </div>
                

            </div>
        </div>
        <div>
            <p>Response</p>
        </div>
    </div>
  )
}

export default Report