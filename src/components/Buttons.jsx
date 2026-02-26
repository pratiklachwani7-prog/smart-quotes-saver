import React from 'react'

const Buttons = (props) => {

    let changingVariable = props.variable ;
    let changingFnc = props.variableFnc ;
    let label = props.label ;
    let data = props.data ;
    let setQuotesArray = props.quotesArrayChanger ;
  
  return (
    <div 
    onClick={ () => 
            {
                if (label.includes("Decreament") || (label.includes("Prev")) ) 
                    {
                        changingFnc(prev => prev - 1) ;
                        setQuotesArray( [] ) ;
                    }
                else if (label.includes("Increament") || (label.includes("Next")) ) 
                    {
                        changingFnc(prev => prev + 1) ;
                        setQuotesArray( [] ) ;
                    }
            }  
     }
    className='flex gap-4 button bg-white border-3 border-gray-300 shadow-sm  px-5 py-3 text-xl cursor-pointer
    active:scale-95 hover:bg-gray-50
    '>
        {data}
    </div>
  )
}

export default Buttons
