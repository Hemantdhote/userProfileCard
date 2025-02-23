import React from 'react'

const Card = ({data,idx}) => {
console.log(data);
  

  
  
  return (
    <div>
      <div className='bg-neutral-700 w-60 flex flex-col items-center p-3 rounded-lg'>
        <div className='h-25 w-25 bg-blue-500 rounded-full overflow-hidden'>
          <img className='h-full w-full object-cover object-center' src={data.profileURL} alt={data.name} />
        </div>
        <h1 className='text-xl font-bold text-white'> {data.name} </h1>
        <h3 className=' text-white mt-1'> {data.email} </h3>
        <h5 className='text-center text-white text-sm mt-1'>{data.discription}</h5>
      </div>
      
    </div>
  )
}

export default Card
