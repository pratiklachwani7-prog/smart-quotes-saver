import React from 'react'

const Buttons = (props) => {

    let changingVariable = props.variable ;
    let changingFnc = props.variableFnc ;
    let data = props.data ;
    let setQuotesArray = props.quotesArrayChanger ;
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
    className='button bg-amber-300 px-2 py-2.5 border-2 border-black text-xl cursor-pointer
    hover:bg-amber-200
    active:scale-95
    '>
        {data}
    </div>
  )
}

export default Buttons
