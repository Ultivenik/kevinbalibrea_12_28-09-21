import React from 'react'
import calories from './../../../assets/calories-icon.png'
import protein from './../../../assets/protein-icon.png'
import carbs from './../../../assets/carbs-icon.png'
import fat from './../../../assets/fat-icon.png'
import './InfoCard.css'

export default function InfoCard(props) {

    return (
        <div id={props.id} className="card">
            <img
                src={props.info === "Calories" ? calories : props.info === "Proteines" ? protein : props.info === "Glucides" ? carbs : fat}
                alt="info nutriment"
            />
            <div className="card-stats">
                <p className="card-weight">
                    {props.weight} {props.info === "Calories" ? "Kcal" : "g"}
                </p>
                <p className="card-nutrient">{props.info} </p>
            </div>
        </div>
    )
}
