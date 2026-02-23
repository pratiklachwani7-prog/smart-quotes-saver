import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios"
import Cards from './components/Cards';
import Buttons from './components/Buttons';

const App = () => {
  
    const [loading, setLoading] = useState(true) ;
    const [quotesArr, setquotesArr] = useState([]) ;
    const [index, setIndex] = useState(0) ;
    const [limits, setLimits] = useState(8) ;
    
    
    useEffect( () => 
      {
        const fetchQuotes = async () =>
          {
            setLoading(true) ;
            const response = await axios.get(`https://dummyjson.com/quotes?limit=${limits}&skip=${10+index}`) ;
            //console.log("The response :- " , response) ;
            const dataQuotes = response.data.quotes ;
            //console.log("The quotes :- " , dataQuotes) ;
            setquotesArr(dataQuotes) ;
            setLoading(false) ;
          }  ;
          
          fetchQuotes() ; 
        }
        , [limits , index ] ) ;
        
        let printQuotesData ;
        if (loading)
        {
          printQuotesData = <h3 className='w-full text-5xl flex justify-center font-semibold'>Loading.....</h3>
        }
        else
        {
            printQuotesData =  (
                quotesArr.map((elem , idx) =>
                {
                  return <Cards key={idx} id={idx} quote={elem.quote} author={elem.author}/>
                })
              )
        }

  return (
    <>
      <div className='min-h-full min-w-full bg-[#faebd7] flex gap-8 flex-col' >
            <div className='flex gap-19 justify-end mx-5 my-3'>
                  <div className='flex gap-2'>
                      <input type="radio" name="page" id="All"/>
                      <label htmlFor="All">All Quotes</label>
                  </div>
                  <div className='flex gap-2'>
                      <input type="radio" name="page" id="Save"/>
                      <label htmlFor='Save'>Saved Quotes</label>
                  </div>
            </div>

            <div className='flex gap-5 justify-center'>
              <Buttons data="Decreament Number of Quotes" variable={limits} variableFnc = {setLimits} quotesArrayChanger = {setquotesArr}/>
              <h3 className='flex items-center text-2xl font-semibold'>Number of Quotes :- {limits}</h3>
              <Buttons data="Increament Number of Quotes" variable={limits} variableFnc = {setLimits} quotesArrayChanger = {setquotesArr}/>
            </div>

            <div className='flex flex-wrap'>
              {printQuotesData}
            </div>


            <div className='flex gap-5 justify-center'>
              <Buttons data="Prev" variable={index} variableFnc = {setIndex} quotesArrayChanger = {setquotesArr}/>
              <h3 className='flex items-center text-2xl font-semibold'>Page :- {index+1}</h3>
              <Buttons data="Next" variable={index} variableFnc = {setIndex} quotesArrayChanger = {setquotesArr}/>
            </div>
      </div>

    </>
  )
}

export default App
