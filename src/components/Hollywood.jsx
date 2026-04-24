import React from 'react'
import Data from '../Data.js'
import { Link } from 'react-router-dom'

const Hollywood = () => {
    const HollywoodData = Data.filter((item) => item.category === 'Hollywood')
    return (
        <div className="Hollywood-container">
            <h1 className="Hollywood-title">Hollywood</h1>
            {HollywoodData.map((Hollywood) => (
                <div key={Hollywood.id} className="Hollywood-card">
                    <h2 className="Hollywood-card-title">{Hollywood.title}</h2>
                    <img className="Hollywood-image" src={Hollywood.img_url} alt={Hollywood.title} />
                    <p className="Hollywood-description">{Hollywood.description}</p>
                    <Link to={`/post/${Hollywood.id}`} className="read-more">Read More →</Link>
                </div>
            ))}
        </div>
    )
}

export default Hollywood
