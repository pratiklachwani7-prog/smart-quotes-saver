import React from 'react'

const Cards = (props) => {

    //console.log(props);

  return (
    <div className='m-h-[24vh] w-72 bg-white shadow-lg shadow-gray-300/40 border border-gray-200 mt-15 ml-15 shrink-0 rounded-4xl p-10 flex-'>
      <p className='text-gray-800 text-sm'>{props.quote}</p>
      <br />
      <p className='text-lg text-center text-gray-500 mb-4'>~{props.author}.</p>
      <div className='bg-indigo-500 text-white transition duration-200 rounded-lg py-2 cursor-pointer flex justify-center gap-2
      hover:bg-indigo-600 active:scale-95
      ' >
        <span>Save</span>   
      </div>
    </div>
  )
}

export default Cards
