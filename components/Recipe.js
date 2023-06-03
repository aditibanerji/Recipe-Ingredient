import React from 'react'

const Recipe = ({key, label , calories , image , ingredients}) => {
  return (
    <div className='recipe-container'>
        <h1>{label}</h1>
        <ol>
            {
                ingredients.map( (ing)=>{

                    return(
                        <li>{ing.text}</li>
                    )

                })
            }
        </ol>
        <p>{calories}</p>
        <img src={image}></img>
     
    </div>
  )
}

export default Recipe
