import React from 'react'
import Data from '../Data.js'
import { Link } from 'react-router-dom'

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
                    <Link to={`/post/${bollydata.id}`} className="read-more">Read More →</Link>

                </div>
            ))}
            <Link to="/" className="read-more">Back to Home</Link>
        </div>
    )
}

export default Bollywood
