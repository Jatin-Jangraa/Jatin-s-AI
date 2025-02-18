import { createContext, useState } from "react";
import runchat from "./config/Gemini";



export const Context =createContext();

const ContextProvider =(props)=>{

   const [input,setInput]=useState("")
   const [recentPrompt,setRecentPrompt]=useState("");
   const [prevPrompts,setPrevPrompts]=useState([]);
   const [showResult,setShowResult]=useState(false);
   const [loading,setLoading]=useState(false);
   const [resultData,setResultData]=useState("");


const onsent= async () => {

    setResultData("");
    setLoading(true);
    setShowResult(input)
    setRecentPrompt(input)
    setPrevPrompts(prev=>[...prev,input])
    const response =await runchat(input)
    setResultData(response)
    setLoading(false)
    setInput("")

    console.log(response);
    
  await runchat(input);}
 
console.log(input);
 


    let contextValue={
        input,
        setInput,
        prevPrompts,
        setPrevPrompts,
        onsent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
       
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}


export default ContextProvider
