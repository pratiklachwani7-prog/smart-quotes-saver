import { RiBookmarkFill, RiBookmarkLine } from '@remixicon/react';
import React, { useState } from 'react'

const Cards = (props) => {
    const [cardStatus, setCardStatus] = useState("Not_Saved")  //"Saved"
    const setSavedQuotesArray = props.setSavedQuotesArr ;
    const savedQuotesArr= props.savedQuotes ;

  return (
    <div className='m-h-[24vh] w-72 bg-white shadow-lg shadow-gray-300/40 border border-gray-200 mt-15 ml-15 shrink-0 rounded-4xl p-10 flex-'>
      <p className='text-gray-800 text-sm'>{props.quote}</p>
      <br />
      <p className='text-lg text-center text-gray-500 mb-4'>~{props.author}.</p>
      <div 
       onClick={ () => 
              {
                const savedQuotesArrayCopy = [...savedQuotesArr] ;
                if (cardStatus == "Saved") 
                  {
                    setCardStatus("Not_Saved") ;
                    savedQuotesArrayCopy.splice(props.id , 1 )
                    setSavedQuotesArray( savedQuotesArrayCopy);

                  }
                else if (cardStatus == "Not_Saved") 
                  {
                    setCardStatus("Saved") ;
                    savedQuotesArrayCopy.push(
                      {
                        id : props.id ,
                        author : props.author,
                        quote : props.quote ,
                      }
                    )
                    setSavedQuotesArray(savedQuotesArrayCopy) ;

                  }
              }
        }   
      className='bg-indigo-500 text-white transition duration-200 rounded-lg py-2 cursor-pointer flex justify-center gap-2 select-none
      hover:bg-indigo-600 active:scale-95
      ' >
            {cardStatus === "Not_Saved" ? 
            <>
                Save <RiBookmarkLine /> 
            </> : 
            <>
              Saved <RiBookmarkFill /> 
            </>}
      </div>
    </div>
  )
}

export default Cards
