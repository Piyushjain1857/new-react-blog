import React from 'react'
import Data from '../Data.js'
import { Link } from 'react-router-dom'

const Technology = () => {
    const TechnologyData = Data.filter((item) => item.category === 'Technology')
    return (
        <div className="Technology-container">
            <h1 className="Technology-title">Technology</h1>
            {TechnologyData.map((Technology) => (
                <div key={Technology.id} className="Technology-card">
                    <h2 className="Technology-card-title">{Technology.title}</h2>
                    <img className="Technology-image" src={Technology.img_url} alt={Technology.title} />
                    <p className="Technology-description">{Technology.description}</p>
                    <Link to={`/post/${Technology.id}`} className="read-more">Read More →</Link>
                </div>
            ))}
        </div>
    )
}

export default Technology
