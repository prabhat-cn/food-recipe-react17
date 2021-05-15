import React from 'react'
import style from './recipe.module.css'
// data pass by props from App.js
const Recipe = ({title, calories, image, totalWeight, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt={title} />
            <ol>
                {/* value inside of ingredients */}
                {ingredients.map((ingredient)=> (
                    <li>{ingredient.text}</li>

                ))}

            </ol>
            <p>Calorie: {calories}</p>
            <p>Total Weight: {totalWeight}</p>
            
        </div>
    )
}

export default Recipe
