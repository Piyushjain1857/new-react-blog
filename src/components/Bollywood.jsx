import React from 'react'
import Data from '../Data.js'
import '../css/Bollywood.css'

const Bollywood = () => {
    const bollywoodData = Data.filter((item) => item.category === 'Bollywood')
    return (
        <div className="bollywood-container">
            <h1 className="bollywood-title">Bollywood</h1>
            {bollywoodData.map((bollydata) => (
                <div key={bollydata.id} className="bollywood-card">
                    <h2 className="bollywood-card-title">{bollydata.title}</h2>
                    <img className="bollywood-image" src={bollydata.img_url} alt={bollydata.title} />
                    <p className="bollywood-description">{bollydata.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Bollywood
