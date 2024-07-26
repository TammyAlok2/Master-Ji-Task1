import React from 'react'

const SingleCard = ({value}) => {
  
  return (
    <div>
          <div className=" m-3 p-3 flex justify-between items-center  border-solid border-2 border-indigo-600  ">
            <div className=" flex  gap-20 text-center ">
              <img src={value.image} alt="" className='h-16' />
              <h2 className="text-xl font-bold mt-4"> {value.name} </h2>
            </div>
            <div className=" flex gap-10 items-center">
              <p className="text-xl text-red-500">Rs 9000</p>
              <button className='bg-green-600 text-black'>Course </button>
            </div>
          </div>
    </div>
  )
}

export default SingleCard
