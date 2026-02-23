import React from 'react'

const Cards = (props) => {

    //console.log(props);

  return (
    <div className='m-h-[24vh] w-72 bg-amber-400 mt-15 ml-15 shrink-0 rounded-4xl p-10 flex-'>
      <p className='text-white-100 text-sm'>{props.quote}</p>
      <br />
      <p className='text-xl text-center mb-5'>~{props.author}.</p>
      <div className='bg-pink-200 flex justify-center gap-2' >
        <span>Save</span>   
      </div>
    </div>
  )
}

export default Cards
