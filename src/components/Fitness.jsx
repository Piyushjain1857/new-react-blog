import React from 'react'
import Data from '../Data.js'
import { Link } from 'react-router-dom'

const Fitness = () => {
    const FitnessData = Data.filter((item) => item.category === 'Fitness')
    return (
        <div className="Fitness-container">
            <h1 className="Fitness-title">Fitness</h1>
            {FitnessData.map((Fitness) => (
                <div key={Fitness.id} className="Fitness-card">
                    <div className="Fitness-card-content">
                        <h2 className="Fitness-card-title">{Fitness.title}</h2>
                        <p className="Fitness-description">{Fitness.description}</p>
                        <Link to={`/post/${Fitness.id}`} className="read-more">Read More →</Link>
                    </div>
                    <div className="Fitness-card-image-wrapper">
                        <img className="Fitness-image" src={Fitness.img_url} alt={Fitness.title} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Fitness
