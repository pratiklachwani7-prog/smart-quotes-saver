import React, { useCallback, useEffect, useState } from 'react'
import axios from "axios"
import Cards from './components/Cards';
import Buttons from './components/Buttons';

const App = () => {

    const [loading, setLoading] = useState(true) ;
    const [quotesArr, setquotesArr] = useState([]) ;
    const [index, setIndex] = useState(0) ;
    const [limits, setLimits] = useState(8) ;
    const [currentView, setCurrentView] = useState("all") ;
    const [savedQuotesArr, setSavedQuotesArr] = useState([]) ;
    
    
    useEffect( () => 
      {
        const fetchQuotes = async () =>
          {
            setLoading(true) ;
            const response = await axios.get(`https://dummyjson.com/quotes?limit=${limits}&skip=${10+index}`) ;
            //console.log("The response :- " , response) ;
            const dataQuotes = response.data.quotes ;
            console.log("The quotes :- " , dataQuotes) ;
            setquotesArr(dataQuotes) ;
            setLoading(false) ;
          }  ;
          
          fetchQuotes() ; 
        }
        , [limits , index ] ) ;
        
        let printQuotesData ;
        if (loading)
        {
          printQuotesData = <h3 className='w-full text-5xl flex justify-center font-semibold'>Gathering Wisdon....</h3>
        }
        else
        {
            printQuotesData =  (currentView === "all") ? 
            (
                quotesArr.map( (elem , idx) =>
                {
                  return <Cards key={idx} id={idx} quote={elem.quote} author={elem.author} />
                }  )
              )
                :
            (
              (savedQuotesArr.length > 0) ?
              (
                    savedQuotesArr.map( (elem , idx) => 
                  {
                    return <Cards key={idx} id={idx} quote={elem.quote} author={elem.author}/>
                  } )
               )
               :
               (
                    <h3 className='w-full text-5xl flex justify-center font-semibold'>You have not saved any Quotes yet ! </h3>

               )
                

            )
        }

  return (
    <>
      <div className='min-h-full min-w-full bg-gray-100 flex gap-8 flex-col' >
            <div className='flex justify-end bg-gray-100 rounded-xl p-1 border-b-black border-b-2 '>
                <button
                onClick={ () => 
                      {
                        setCurrentView("all") ;
                      }
                }
                className = {`border-2 border-double border-blue-300 px-3 py-2 my-7 ml-20 font-semibold text-sm ${currentView === "all" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900" } ` }
                >All Quotes</button>
                <button
                onClick={ () => 
                      {
                        setCurrentView("save") ;
                      }
                }
                className = {`border-2 border-double border-blue-300 px-3 py-2 my-7 mr-20 font-semibold text-sm ${currentView === "save" ? "bg-white shadow text-gray-900" : "text-gray-600 hover:text-gray-900" } ` }
                >Saved Quotes</button>
            </div>

            <div 
            className = {`flex gap-5 justify-center ${currentView === "save" ? "hidden" : "block"} ` }>
              <Buttons data="Decreament Number of Quotes" variable={limits} variableFnc = {setLimits} quotesArrayChanger = {setquotesArr} currentView = {currentView}/>
              <h3 className='flex items-center text-xl font-semibold text-gray-700'>Number of Quotes :- {limits}</h3>
              <Buttons data="Increament Number of Quotes" variable={limits} variableFnc = {setLimits} quotesArrayChanger = {setquotesArr} currentView = {currentView}/>
            </div>

            <div className='flex flex-wrap'>
              {printQuotesData}
            </div>


            <div 
            className = {`flex gap-5 justify-center ${currentView === "save" ? "hidden" : "block"} ` }>
              <Buttons data="Prev" variable={index} variableFnc = {setIndex} quotesArrayChanger = {setquotesArr} currentView = {currentView}/>
              <h3 className='flex items-center text-2xl font-semibold'>Page :- {index+1}</h3>
              <Buttons data="Next" variable={index} variableFnc = {setIndex} quotesArrayChanger = {setquotesArr} currentView = {currentView}/>
            </div>
      </div>

    </>
  )
}

export default App
