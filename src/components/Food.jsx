import React from 'react'
import Data from '../Data.js'
import { Link } from 'react-router-dom'

const Food = () => {
    const FoodData = Data.filter((item) => item.category === 'Food')
    return (
        <div className="Food-container">
            <h1 className="Food-title">Food</h1>
            {FoodData.map((Food) => (
                <div key={Food.id} className="Food-card">
                    <div className="Food-card-content">
                        <h2 className="Food-card-title">{Food.title}</h2>
                        <p className="Food-description">{Food.description}</p>
                        <Link to={`/post/${Food.id}`} className="read-more">Read More →</Link>
                    </div>
                    <div className="Food-card-image-wrapper">
                        <img className="Food-image" src={Food.img_url} alt={Food.title} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Food
