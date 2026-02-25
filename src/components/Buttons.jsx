import React from 'react'

const Buttons = (props) => {

    let changingVariable = props.variable ;
    let changingFnc = props.variableFnc ;
    let data = props.data ;
    let setQuotesArray = props.quotesArrayChanger ;
    let currentView = props.currentView ;
  
  return (
    <div 
    onClick={ () => 
            {
                if (data.includes("Decreament") || (data.includes("Prev")) ) 
                    {
                        changingFnc(prev => prev - 1) ;
                        setQuotesArray( [] ) ;
                    }
                else if (data.includes("Increament") || (data.includes("Next")) ) 
                    {
                        changingFnc(prev => prev + 1) ;
                        setQuotesArray( [] ) ;
                    }
            }  
     }
    className='button bg-white border-3 border-gray-300 shadow-sm  px-5 py-3 text-xl cursor-pointer
    active:scale-95 hover:bg-gray-50
    '>
        {data}
    </div>
  )
}

export default Buttons
