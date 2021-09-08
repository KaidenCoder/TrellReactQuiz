import React from 'react'

function Score(){
    let results = []
    
    const getResults = () => {
        Object.keys(localStorage).forEach(function(key){
            // console.log(Number.isInteger(parseInt(key)))
            // console.log(Number.isInteger(parseInt("name")))
            if(Number.isInteger(parseInt(key))){
                results.push(localStorage.getItem(key))
            }    
        }) 
    }  
    
    getResults()
        
    return(
        <>
        {results.map((d,i)=> (
           <p key={i+1000}>Round {i+1} Score: {d}</p>
        ))}
           
        </>
    )
}

export default Score